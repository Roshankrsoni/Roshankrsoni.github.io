#!/bin/bash
# usage: ./lh.sh <label> [mobile|desktop]
set -e
LABEL=${1:-run}
FORM=${2:-mobile}
cd "$(dirname "$0")"
lsof -ti:4173 | xargs kill -9 2>/dev/null || true
npm run build > /tmp/build-$LABEL.log 2>&1 || { tail -20 /tmp/build-$LABEL.log; exit 1; }
nohup npx vite preview --port=4173 > /tmp/preview.log 2>&1 &
sleep 4
if [ "$FORM" = "desktop" ]; then
  FLAGS="--preset=desktop"
else
  FLAGS="--form-factor=mobile --screenEmulation.mobile --throttling-method=simulate"
fi
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  npx lighthouse http://localhost:4173/ --output=json --output-path=/tmp/lh-$LABEL-$FORM.json \
  $FLAGS --only-categories=performance,best-practices,accessibility,seo \
  --chrome-flags="--headless=new --no-sandbox" --quiet > /dev/null 2>&1
node -e "
const r=require('/tmp/lh-$LABEL-$FORM.json');
const s=Object.entries(r.categories).map(([k,v])=>k.slice(0,4).toUpperCase()+' '+Math.round(v.score*100)).join('  ');
const m=r.audits;
console.log('[$LABEL/$FORM]  '+s);
console.log('   FCP '+m['first-contentful-paint'].displayValue+'  LCP '+m['largest-contentful-paint'].displayValue+'  TBT '+m['total-blocking-time'].displayValue+'  CLS '+m['cumulative-layout-shift'].displayValue+'  SI '+m['speed-index'].displayValue);
"
