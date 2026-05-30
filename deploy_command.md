vercel --prod --token vcp_0vLeyv2FwqRlHpUEiZ3vTuJN5fGX0HzoLmUxwyIVferSb1qYD34ZKx4F

Already export VERCEL_TOKEN=vcp_0vLeyv2FwqRlHpUEiZ3vTuJN5fGX0HzoLmUxwyIVferSb1qYD34ZKx4F /export
now everytime vercel --prod

echo $VERCEL_TOKEN //token print

site:xdevutilities.com

source venv/bin/activate

firebase deploy --only functions:passport_photo_api