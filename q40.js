function make_albums(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album_dict = {
        'artist': artist,
        'title': title
    };
    if (tracks)
        album_dict['tracks'] = tracks;
    return album_dict;
}
var albums = make_albums('metallica', 'ride the lightening');
console.log(album+"\n");
albumss = make_albums('harnoor', 'Moonlight');
console.log(album+"\n");
albums = make_albums('David Bowie', 'Heros from Heros');
console.log(album+"\n");
albums = make_albums('harnoor', 'pershawan', 10);
console.log(album+"\n");
