<h1>REST API Workshop</h1>
<h2>This is a repo that I used to lead the REST API workshop for the UF Software Engineering Club</h2>
<br/>
<h2>Run the app locally</h2>
<p>(Download Node)</p>
<ul>
    <li>npm i</li>
    <li>node index.js</li>
</ul>
<h2>Contanerize the app and run the container locally</h2>
<p>(Download Docker)</p>
<ul>
    <li>docker build -t express ./</li>
    <li>docker run -p 3000:3000 express</li>
</ul>
<h2>Push the image to google cloud</h2>
<p>Create a service account in google cloud and copy/paste the json key into gcloudKey.json</p>
<ul>
    <li>docker login -u _json_key -p "$(cat ./gcloudKey.json)" https://gcr.io</li>
    <li>docker build -t gcr.io/[project-id]/express ./</li>
    <li>docker push gcr.io/[project-id]/express</li>
</ul>
