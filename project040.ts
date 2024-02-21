function album(artist,title,tracks){
    let Album ={
        artist : artist,
        title : title
    }
    if(tracks!==undefined)
    Album["tracks"]=tracks
return Album
}
let album1 =album("Atif Aslam","jalpari",20)
console.log("Album 1 :",album1)