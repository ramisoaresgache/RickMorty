export function formatterCharacter(page){
return page.map((i) => ({
    id: i.id,
    name: i.name,
    status: i.status,
    species: i.species,
    gender: i.gender,
    image: i.image,
    episode: i.episode,
}))
}
