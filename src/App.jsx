import React from 'react';


export default function App() {
return (
<div style={{fontFamily: 'Arial, sans-serif', padding: 24}}>
<h1>React App - Beyond CloudOps Session</h1>
<p>React App build and deployed using Azure DevOps Classic Editor Pipelines.</p>
<ul>
<li>Build: `npm run build`</li>
<li>Output served from `build/` folder</li>
<li>Deployment type: `Zip Package Deploy`</li>
</ul>
</div>
);
}
