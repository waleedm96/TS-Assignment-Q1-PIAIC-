function make_album(artist,title,tracks=0){

 let album_dic={
  'artist':artist,
  'title':title,
 }
 if (tracks)
  album_dic['tracks']=tracks
 return album_dic
}

let album=make_album('metallica','ride the lightening');
console.log(album+"\n");
album=make_album('harnoor','Moonlight');
console.log(album+"\n");
album=make_album('David Bowie','Heros from Heros');
console.log(album+"\n");
album=make_album('harnoor','pershawan',10);
console.log(album+"\n");
