const fetchHeroes = async () => {

    const url =  "https://akabab.github.io/superhero-api/api/all.json"

    const resp = await fetch(url);

    const data = await resp.json()

    const heroes = await data.map(hero =>(
        {
            id: hero.id,
            name: hero.name,
            aliases: hero.biography.aliases,
            birth:hero.biography.placeOfBirth,
            alignament:hero.biography.alignment,
            works:hero.biography.work,
            gender: hero.appearance.gender,
            race: hero.appearance.race,
            publisher: hero.biography.publisher,
            imgSm: hero.images.sm ,
            imgLg: hero.images.lg ,
            heroInt: hero.powerstats.intelligence,
            heroStr: hero.powerstats.strength,
            heroSpd: hero.powerstats.speed,
            heroPwr: hero.powerstats.power,
            heroCom: hero.powerstats.combat,
            heroDur: hero.powerstats.durability,
            heroH: hero.appearance.height,
            heroW: hero.appearance.weight,
        }
    ))

    return heroes;
}

export default fetchHeroes