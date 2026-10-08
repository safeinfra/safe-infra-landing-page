import http from 'node:http';
import {readFile} from 'node:fs/promises';
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',mp4:'video/mp4',jpg:'image/jpeg',svg:'image/svg+xml'};
const files={'/logo.svg':'logo.svg','/':'index.html','/styles.css':'styles.css','/app.js':'app.js','/media/env-badge-demo.mp4':'media/env-badge-demo.mp4','/media/env-badge-poster.jpg':'media/env-badge-poster.jpg'};
http.createServer(async(req,res)=>{
  const file=files[new URL(req.url,'http://localhost').pathname];
  if(!file){res.writeHead(404);res.end('Not found');return;}
  try{
    const data=await readFile(new URL('dist/'+file,import.meta.url));
    res.setHeader('Content-Type',types[file.split('.').pop()]);
    res.setHeader('Accept-Ranges','bytes');
    const range=req.headers.range;
    if(range){
      const match=/^bytes=(\d*)-(\d*)$/.exec(range);
      let start=match?.[1]?Number(match[1]):0;
      let end=match?.[2]?Number(match[2]):data.length-1;
      if(match&&!match[1]&&match[2]){start=Math.max(0,data.length-Number(match[2]));end=data.length-1;}
      if(!match||(!match[1]&&!match[2])||start>=data.length||end<start){res.writeHead(416,{'Content-Range':`bytes */${data.length}`});res.end();return;}
      end=Math.min(end,data.length-1);
      res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${data.length}`,'Content-Length':end-start+1});
      res.end(req.method==='HEAD'?undefined:data.subarray(start,end+1));return;
    }
    res.setHeader('Content-Length',data.length);
    res.end(req.method==='HEAD'?undefined:data);
  }catch{res.writeHead(500);res.end('Unable to load page');}
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
