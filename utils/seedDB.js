// Require all models and packages
var mongoose     = require("mongoose"),
	artLinks     = require("../models/artLinks"),
    imageLinks   = require("../models/imageLinks"),
    specialLinks = require("../models/specialLinks");

// Initialize art links data
var art_data = [
    {
        title: "Sherlock Holmes", 
        link: "https://i.pinimg.com/originals/cd/68/e1/cd68e180500931019df5917003ff0126.jpg",
        description: "Mediocrity know nothing higher than itself, but talent instantly recognizes genius."
    },
    {
        title: "Wavin' Flag", 
        link: "https://i.pinimg.com/originals/0d/67/f7/0d67f7df67b96a523a7436cf07432b43.jpg",
        description: "Our flag does not fly because the wind moves it, it flies with the last breath of each soldier who died protecting it."
    },
    {
        title: "Diwali Lamp", 
        link: "https://i.pinimg.com/originals/44/22/a2/4422a2b8c00e682a7eb833e457a494ab.jpg",
        description: "Let every spark that ignites a fire in your hearts, bring a sparkle in your life."
    },
    {
        title: "Starlord", 
        link: "https://i.pinimg.com/originals/f6/cf/a9/f6cfa994c000d5ce3261cabfaf5c6ce7.jpg",
        description: "I was only a kid when I left Earth, and I had no idea what the universe had in store for me."
    },
    {
        title: "Darth Vader", 
        link: "https://i.pinimg.com/originals/e3/a0/68/e3a0688bf261e04606f4761ee61f0628.jpg",
        description: "I find your lack of faith disturbing."
    },
    {
        title: "Lonesome", 
        link: "https://i.pinimg.com/originals/b4/d5/07/b4d507e3a7d2f289637e388a990fda52.jpg",
        description: "Let the rain wash away the pain of yesterday."
    },
    {
        title: "Captain America", 
        link: "https://i.pinimg.com/originals/ee/19/8b/ee198bcb2650db50ec6b8756db7ef4d1.jpg",
        description: "I can do this all day."
    },
    {
        title: "Captain Marvel", 
        link: "https://i.pinimg.com/originals/c9/fa/00/c9fa00e363b0ff92fca532690ca9d6cb.jpg",
        description: "Even with my back against the wall, I dont give up."
    },
    {
        title: "URI", 
        link: "https://i.pinimg.com/originals/bd/21/f7/bd21f79b025606ea021616e382f1abdf.jpg",
        description: "ये हिंदुस्तान अब चुप नहीं बैठेगा, ये नया हिंदुस्तान है. ये घर में घुसेगा भी और मारेगा भी |"
    },
    {
        title: "Vision", 
        link: "https://i.pinimg.com/originals/aa/f8/9b/aaf89b9f76a8c591f5efefb3a8e826d4.jpg",
        description: "Our very strength invites challenge, challenge inctes conflict, and conflict breeds catastrophe."
    },
    {
        title: "Doctor Strange", 
        link: "https://i.pinimg.com/originals/ae/13/7d/ae137d3baf8543480a17309a25a166bd.jpg",
        description: "The greatest gift we can receive is to have a chance, just once in our lives, to make a difference."
    },
    {
        title: "Black Panther", 
        link: "https://i.pinimg.com/originals/f7/41/13/f74113428d27f4a73e83b51e9a466dc9.jpg",
        description: "Vengeance has consumed you, it's consuming them, I am done letting it consume me."
    },
    {
        title: "Hulk", 
        link: "https://i.pinimg.com/originals/f8/76/b9/f876b953a69e6a220347943fee664241.jpg",
        description: "The worst part of being strong is that no one ever asks if you are okay."
    },
    {
        title: "Splash", 
        link: "https://i.pinimg.com/originals/0c/a2/6e/0ca26e80a333a153db35442b66d1c053.jpg",
        description: "Water is the driving force all nature."
    },
    {
        title: "Antman", 
        link: "https://i.pinimg.com/originals/07/5e/f5/075ef50dce463589e5b29c687a757fb5.jpg",
        description: "It's not about saving our world, it's about saving theirs."
    },
    {
        title: "Black Widow", 
        link: "https://i.pinimg.com/originals/2c/4b/cd/2c4bcdc888042bced5e051e981be8897.jpg",
        description: "Staying together is important than how we stay together."
    },
    {
        title: "Thor", 
        link: "https://i.pinimg.com/originals/bc/dd/44/bcdd448abbfd7e12c7f03365b1e4d3ab.jpg",
        description: "Waves are but water, wind but air, and though lightning be fire, yet it must answer Thunder's call."
    },
    {
        title: "Mysterio", 
        link: "https://i.pinimg.com/originals/3e/79/80/3e7980fc457c923ad575616f891dc693.jpg",
        description: "Don't ever apologize for being the smartest one in the room."
    },
    {
        title: "Inktober", 
        link: "https://i.pinimg.com/originals/fe/e5/34/fee534e6f8ef0958ea97ba5bf5acde08.jpg",
        description: "A month-long art challenge focussed on improving skill and developing positive drawing habits."
    },
    {
        title: "Wolverine", 
        link: "https://i.pinimg.com/originals/5d/6e/54/5d6e5417e34870a4047b3a33476e3309.jpg",
        description: "When life knocks you down, it's time to work and wake up your beast."
    },
    {
        title: "Ganapati", 
        link: "https://i.pinimg.com/originals/5d/b7/af/5db7af30a651f66d8031726d4b2ae5e8.jpg",
        description: "एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि , गजेशानाय भालचन्द्राय श्रीगणेशाय धीमहि |"
    },
    {
        title: "Saturn", 
        link: "https://i.pinimg.com/originals/e7/ca/3e/e7ca3e3997d679e7d59962fadb171559.jpg",
        description: "Without imperfection, neither you nor I would exist."
    },
    {
        title: "Thanos", 
        link: "https://i.pinimg.com/originals/69/d6/06/69d606175334c03e1adb0e24b2dadcc2.jpg",
        description: "Dread it, run from it, destiny arrives all the same."
    },
    {
        title: "Friends", 
        link: "https://i.pinimg.com/originals/b6/cd/6b/b6cd6befa969839595f8d83cd6abf21d.jpg",
        description: "The one with 'LIFE'."
    },
    {
        title: "Vande Mataram", 
        link: "https://i.pinimg.com/originals/46/74/b8/4674b8ebeb1a6d5601bac78ccdff04c9.jpg",
        description: "ऐ वतन, वतन मेरे, आबाद रहे तू, मैं जहाँ रहूँ जहाँ में याद रहे तू, ऐ वतन, मेरे वतन |"
    },
    {
        title: "Warrior", 
        link: "https://i.pinimg.com/originals/20/25/6e/20256e55f7a2418330b12ddb47600f47.jpg ",
        description: "Give them nothing, but take from them everything."
    },
    {
        title: "Lamborghini", 
        link: "https://i.pinimg.com/originals/d9/8c/a1/d98ca1013d889ceb779c4cffcdfe1009.jpg",
        description: "To play with the beasts, you have got to become one."
    },
    {
        title: "Windy day", 
        link: "https://i.pinimg.com/originals/2e/96/c8/2e96c8a2f7313a6ca5d924fbb02417a1.jpg",
        description: "Her messy hair is a visible attribute of her stubbron spirit. As she shakes it free, she smiles knowing wild is her favorite color."
    },
    {
        title: "Planes", 
        link: "https://i.pinimg.com/originals/e9/f0/8d/e9f08d1782dd8d2a53d121e8260606ac.jpg",
        description: "It's not how good you are, it's how good you want to be."
    },
    {
        title: "Explore the depth", 
        link: "https://i.pinimg.com/originals/40/ce/2d/40ce2d744c905736ac4e9c2a138520ed.jpg",
        description: "Every journey begins with just a single step."
    },
    {
        title: "Eye", 
        link: "https://i.pinimg.com/originals/76/54/49/765449d41bc3e0805162535b4cf49468.jpg",
        description: "The eyes are the mirror of the soul."
    },
    {
        title: "Hogwarts", 
        link: "https://i.pinimg.com/originals/da/00/9f/da009f08de2b151d181fee5b143a49d2.jpg",
        description: "It is important to believe that we all have magic inside us."
    },
    {
        title: "Humming Bird", 
        link: "https://i.pinimg.com/originals/96/ff/3f/96ff3f6ab5ea15c55c9c4e24c011c74e.jpg",
        description: "Neither the humming bird nor the flower wonders how beautiful it is."
    },
    {
        title: "Mjolnir", 
        link: "https://i.pinimg.com/originals/ba/08/fd/ba08fd57e7e537daa1f5aff749c714d3.jpg",
        description: "If the only tool you have is a hammer, you tend to see every problem as a nail."
    },
    {
        title: "Eagle", 
        link: "https://i.pinimg.com/originals/d4/82/61/d4826124782cd59b26e1cc89849e64f9.jpg",
        description: "If you want to fly, give up everything that weighs you down."
    },
    {
        title: "Coffee", 
        link: "https://i.pinimg.com/originals/4d/dd/6b/4ddd6b3dab3261432d0c180ef32f3644.jpg",
        description: "Coffee is always a good idea."
    },
    {
        title: "Feather", 
        link: "https://i.pinimg.com/originals/91/b3/6d/91b36d83630f8342553f0e4a05b4fbc0.jpg",
        description: "Accept your own beauty."
    },
    {
        title: "Cube", 
        link: "https://i.pinimg.com/originals/4d/bb/12/4dbb12477bdd8d3e168b19ec764e9a6a.jpg",
        description: "It always seems impossible until it's done."
    },
    {
        title: "Aishwarya", 
        link: "https://i.pinimg.com/originals/da/00/9f/da009f08de2b151d181fee5b143a49d2.jpg",
        description: "A warm smile is a universal language of kindness."
    },
    {
        title: "Vaishnavi", 
        link: "https://i.pinimg.com/originals/35/80/2f/35802faf73133614f98b8dbfd53cfe08.jpg",
        description: "My first ever portrait art. My inspiration to draw portrait sketches starts from here."
    },
    {
        title: "Nidhi", 
        link: "https://i.pinimg.com/originals/43/b7/4c/43b74caca9f88cfbdc6d12632f36169f.jpg",
        description: "A sister is a little bit of childhood, that can never be lost."
    },
    {
        title: "Ashwini", 
        link: "https://i.pinimg.com/originals/a6/0b/9d/a60b9d10cd8e444c75a1137235bfb668.jpg",
        description: "Good friends are like stars, you don't always see them, but you know they're always there."
    },
    {
        title: "Adhya", 
        link: "https://i.pinimg.com/originals/6e/38/60/6e3860fe225986396a6ba05161dcaeab.jpg",
        description: "So tiny, so small, so loved by all."
    }
];

// Initialize image links data
var image_data = [
    {
        title: "The Golden Dusk", 
        link: "https://i.pinimg.com/originals/08/93/6e/08936ecb14ad4f8664f060e954c2f4a2.jpg",
        description: "At the end of the storm, is a golden sky."
    },
    {
        title: "Peacock Cloud", 
        link: "https://i.pinimg.com/originals/c4/37/43/c437430054dc9f56f20a9d5b2219bc9b.jpg",
        description: "Because spotting a peacock on land is too mainstream."
    },
    {
        title: "Rays of hope", 
        link: "https://i.pinimg.com/originals/5e/1c/e9/5e1ce9adece469c4a46facd504b8d4d4.jpg",
        description: "Look at the sunny side of everything."
    },
    {
        title: "Cloud Eruption", 
        link: "https://i.pinimg.com/originals/f8/eb/d3/f8ebd3c43c96cb77cfcf9f1699fd5fce.jpg",
        description: "The summit is what drives us, but the climb itself is what matters."
    },
    {
        title: "The Fire Ball", 
        link: "https://i.pinimg.com/originals/2f/4a/fd/2f4afd169ea5e44d294270f5b31d85c2.jpg",
        description: "Sky above me, earth below me, fire within me."
    },
    {
        title: "Majestic Sky", 
        link: "https://i.pinimg.com/originals/7e/8b/97/7e8b97eb830ea668945cfc491e02d242.jpg",
        description: "The sky is the daily bread of the eye."
    },
    {
        title: "Ocean of clouds", 
        link: "https://i.pinimg.com/originals/d8/02/a6/d802a629fd64e4f77de8bceeb1f89d44.jpg",
        description: "Every cloud has a silver lining."
    },
    {
        title: "Buttery Cloud", 
        link: "https://i.pinimg.com/originals/a1/ee/c7/a1eec7369d355b7f01e725fb09d7e528.jpg",
        description: "In all things of nature there is something of the marvelous."
    },
    {
        title: "Glacier Cloud", 
        link: "https://i.pinimg.com/originals/43/0d/9f/430d9f6c5004222acf59a46a22ba5157.jpg",
        description: "Glacier of clouds emerging from the Himalayas."
    },
    {
        title: "Butterfly", 
        link: "https://i.pinimg.com/originals/db/9d/6c/db9d6cbb71b84f86978dd0e9ae459a28.jpg",
        description: "If nothing ever changed, there would be no such things as butterflies."
    },
    {
        title: "Dexter the Pup", 
        link: "https://i.pinimg.com/originals/ce/3c/60/ce3c60b5c985e8f939f2c788b305cd3e.jpg",
        description: "Happiness is a warm puppy."
    },
    {
        title: "Mr. Krabs", 
        link: "https://i.pinimg.com/originals/da/a9/54/daa954af3184645fe2bd638839f6286f.jpg",
        description: "Mr. Krabby returning to his hotel 'The Krusty Krabs'."
    },
    {
        title: "The Web", 
        link: "https://i.pinimg.com/originals/dd/1e/19/dd1e199bf92302f8838974c7ec7e4d30.jpg",
        description: "Our lives are a web of endless possibilities."
    },
    {
        title: "Hello Kitty", 
        link: "https://i.pinimg.com/originals/83/f3/e7/83f3e7bf29760da1ca4963a7a2fe8de2.jpg",
        description: "If you want to know how to love, get a kitten and look into it's eyes, you  will get it."
    },
    {
        title: "Brown bug", 
        link: "https://i.pinimg.com/originals/a1/d3/96/a1d396b46bdbe2f641b4024209bf6276.jpg",
        description: "Don;t let things bug you."
    },
    {
        title: "Lion King", 
        link: "https://i.pinimg.com/originals/a9/21/0f/a9210f8461ebad982b6814b85d8fb4f6.jpg",
        description: "A lion doesn't turn around when the small dog barks."
    },
    {
        title: "Mighty Ant", 
        link: "https://i.pinimg.com/originals/35/88/f6/3588f6474103ea61db24fa1564c4e2a9.jpg",
        description: "An ant on the move does more than a dozing ox."
    },
    {
        title: "Squirrel", 
        link: "https://i.pinimg.com/originals/cc/a0/4a/cca04aa4a9f761bbf68f719609f9b227.jpg",
        description: "Be adventurous like a squirrel."
    },
    {
        title: "Stages of life", 
        link: "https://i.pinimg.com/originals/69/76/e1/6976e1765e4fda26cd6720a9d870e3fe.jpg",
        description: "A butterfly does not retrun to a caterpillar after it is mature. We must learn to grow and evolve into a stronger, wiser and better version of ourselves. Life occurs in stages and taking a step at a time is key to learning and growing."
    },
    {
        title: "Flowery", 
        link: "https://i.pinimg.com/originals/11/c5/f6/11c5f6abb536c89654ab04460207eec5.jpg",
        description: "With grace in her heart and flowers in her hair."
    },
    {
        title: "Sunkissed flower", 
        link: "https://i.pinimg.com/originals/03/42/62/0342622a9c7f9f8c651b902905c4810c.jpg",
        description: "Let us dance in the sun, wearing wild flowers in our hair."
    },
    {
        title: "A drop", 
        link: "https://i.pinimg.com/originals/27/66/49/2766499df74e095940bdb25b76fa0b2f.jpg",
        description: "A drop of water, if it could write out its own history, would explain the universe to us."
    },
    {
        title: "Dew", 
        link: "https://i.pinimg.com/originals/ee/35/5b/ee355b0fef53b615f923e49725cad02f.jpg",
        description: "Every dew drop and rain drop had a whole heaven within it."
    },
    {
        title: "Weed", 
        link: "https://i.pinimg.com/originals/d4/76/4d/d4764dad304c5a9281ddff01b869b695.jpg",
        description: "Some see a weed, some see a wish."
    },
    {
        title: "Lotus", 
        link: "https://i.pinimg.com/originals/f5/74/53/f5745396326ecfac470f625ada50559a.jpg",
        description: "Breathe in deeply and let your life unfold."
    },
    {
        title: "Purple", 
        link: "https://i.pinimg.com/originals/6b/2e/a8/6b2ea8690cf376f9301a1148f88934e6.jpg",
        description: "Where flowers bloom, so does hope."
    },
    {
        title: "Bliss", 
        link: "https://i.pinimg.com/originals/65/e7/0e/65e70e7d6fe044aa7df96414e233b5ab.jpg",
        description: "The earth laughs in flowers."
    },
    {
        title: "Fresh", 
        link: "https://i.pinimg.com/originals/67/f5/bd/67f5bd396338e61a65735fbdd15f8b25.jpg",
        description: "Every flower is a soul blossoming in nature."
    },
    {
        title: "Hue", 
        link: "https://i.pinimg.com/originals/69/1e/c9/691ec9d8d70701d8f3fd04f1b5ef3465.jpg",
        description: "Let your joy burst forth like flowers in the spring."
    },
    {
        title: "Bloom", 
        link: "https://i.pinimg.com/originals/e2/7c/37/e27c378ba78694c35fdaad74d8a43c84.jpg",
        description: "Love is the flower you got to let grow."
    },
    {
        title: "Spring", 
        link: "https://i.pinimg.com/originals/8f/4d/31/8f4d31cd5ac5eee3135b0837befd29b2.jpg",
        description: "In a field of roses, I am a wildflower."
    },
    {
        title: "Tiny Flower", 
        link: "https://i.pinimg.com/originals/8f/7c/b2/8f7cb201f6cdee79e7856f96060586db.jpg",
        description: "Grow where you are planted."
    },
    {
        title: "Cuddle Flower", 
        link: "https://i.pinimg.com/originals/d7/23/c0/d723c05dd5ba8911c6fb124b0c162c2f.jpg",
        description: "This flower just needs a really great hug."
    },
    {
        title: "Yellow", 
        link: "https://i.pinimg.com/originals/33/4b/c2/334bc2f9671d5b9a2fa1444bfe1dcfa2.jpg",
        description: "Growth creates blossom."
    },
    {
        title: "Humid", 
        link: "https://i.pinimg.com/originals/d5/85/7a/d5857a2d3d206f5ba9a6611d1664e319.jpg",
        description: "The beauty of a flower is its uniqueness."
    },
    {
        title: "Starburst", 
        link: "https://i.pinimg.com/originals/0c/2c/8a/0c2c8aaf8774bdb76e69803a8df1b594.jpg",
        description: "Let light shine out of darkness."
    },
    {
        title: "Light Box", 
        link: "https://i.pinimg.com/originals/22/57/3a/22573ab3b4398b3d2ec70fcd81d39640.jpg",
        description: "It is during the darkest moments that we must focus to see the light."
    },
    {
        title: "Light-ception", 
        link: "https://i.pinimg.com/originals/dd/0a/b4/dd0ab47f49444624ab92216eae7fefe5.jpg",
        description: "Travel light, Live light, Be the light, Spread the light."
    },
    {
        title: "Illuminati Rings", 
        link: "https://i.pinimg.com/originals/e9/c7/4d/e9c74da128730a2484edd3b6117b87e9.jpg",
        description: "Glow is the essense of beauty."
    },
    {
        title: "Constellation", 
        link: "https://i.pinimg.com/originals/91/69/c9/9169c990b2e0aa0bc9756bbb551779fb.jpg",
        description: "Within you is the light of thousand suns."
    },
    {
        title: "Zig-zag", 
        link: "https://i.pinimg.com/originals/f0/c3/83/f0c38300f9b19f581f2aff209b5127b9.jpg",
        description: "You only need a spark to start a whole blaze."
    },
    {
        title: "Neon fountain", 
        link: "https://i.pinimg.com/originals/bc/47/09/bc4709585ee45cf63375008d1e005797.jpg",
        description: "When you posses light within, you see it externally."
    },
    {
        title: "Rope Glow", 
        link: "https://i.pinimg.com/originals/45/b8/8d/45b88de5d7777970d429e44eba279aaa.jpg",
        description: "Be the light that helps others see."
    },
    {
        title: "Saturn Shadow", 
        link: "https://i.pinimg.com/originals/8a/34/6f/8a346fbb72ded28804776fd00a63bbe3.jpg",
        description: "Happiness can be found. even in the darkest of times, if one only remembers to turn on the lights."
    },
    {
        title: "Melody", 
        link: "https://i.pinimg.com/originals/4d/bb/65/4dbb65e95c0550b62f2cb5948622b21c.jpg",
        description: "Music tends to refresh the soul."
    },
    {
        title: "Stripes", 
        link: "https://i.pinimg.com/originals/93/fb/d4/93fbd43e3b91b6266fd95a0b24011882.jpg",
        description: "Stripes go with everything."
    },
    {
        title: "The Goblet", 
        link: "https://i.pinimg.com/originals/84/6b/00/846b00470c762486d6067cb789cfa23f.jpg",
        description: "I drink and I know things."
    },
    {
        title: "Cappuccino", 
        link: "https://i.pinimg.com/originals/9e/25/17/9e2517123eeeccd6ea3ecd2fb4b991cd.jpg",
        description: "A lot can happen over a cup of coffee."
    },
    {
        title: "Mocktail", 
        link: "https://i.pinimg.com/originals/5f/25/37/5f2537626ada6689c64427b921c11c55.jpg",
        description: "Drink from the well of your self and begin again."
    },
    {
        title: "Grace", 
        link: "https://i.pinimg.com/originals/0d/90/5c/0d905cc73aa1b649ae7e2555d59a1cab.jpg",
        description: "Every piece of jewellery tells a story."
    },
    {
        title: "An Astrophile", 
        link: "https://i.pinimg.com/originals/32/d6/00/32d600f42220e6d0199e2a3031d183cf.jpg",
        description: "Space is an inspirational concept that allows you to dream big."
    },
    {
        title: "Palm", 
        link: "https://i.pinimg.com/originals/8e/15/2d/8e152de4119f76280218df07ab322705.jpg",
        description: "Think peace and live green."
    },
    {
        title: "Space Twin", 
        link: "https://i.pinimg.com/originals/54/3e/0f/543e0f8ed712125b68f8dd978d0bab68.jpg",
        description: "We look up at the same stars and see such different things."
    },
    {
        title: "The Sculpture", 
        link: "https://i.pinimg.com/originals/f1/9c/d6/f19cd6c1ac9667a6a0ea78740f18a4f9.jpg",
        description: "Every block of stone has a statue inside it and it is the task of sculptor to discover it."
    },
    {
        title: "Serene", 
        link: "https://i.pinimg.com/originals/8c/d5/15/8cd515017797ed467b8d12b513a4a8e9.jpg",
        description: "Peace is its own reward."
    },
    {
        title: "Meditate", 
        link: "https://i.pinimg.com/originals/4f/e7/6b/4fe76b8968691c82ffa571241265437c.jpg",
        description: "Out here, everything just seems better."
    },
    {
        title: "Kerala", 
        link: "https://i.pinimg.com/originals/5b/dc/d2/5bdcd221f93cc891fa6b0bada8320b75.jpg",
        description: "In search of the God, in the very God's own country."
    },
    {
        title: "Western Ghats", 
        link: "https://i.pinimg.com/originals/01/7f/fd/017ffd2649298e5855ed09a14775606c.jpg",
        description: "Beautiful things don't ask for attention."
    },
    {
        title: "Beach Dusk", 
        link: "https://i.pinimg.com/originals/7c/db/a9/7cdba99908d59dae92d349e82d4a2144.jpg",
        description: "Every sunset brings the promise of a new dawn."
    },
    {
        title: "Spooky", 
        link: "https://i.pinimg.com/originals/3b/94/4b/3b944be56da885f075f5060e02a87dc5.jpg",
        description: "Hell is empty and all the devils are here."
    },
    {
        title: "Grassy", 
        link: "https://i.pinimg.com/originals/9a/78/d8/9a78d8fa5e59bfe6f1f7d46be2fba884.jpg",
        description: "A leaf of grass is no less than a journet-work of the stars."
    },
    {
        title: "Sail", 
        link: "https://i.pinimg.com/originals/ba/d2/cb/bad2cbb559bad6705ec289a5d0e41b67.jpg",
        description: "Smell the sea and feel the sky, let your soul and spirit fly."
    },
    {
        title: "Foggy", 
        link: "https://i.pinimg.com/originals/3e/03/2b/3e032bff1fe2dfb7ccbefa734f7651ff.jpg",
        description: "Nature always wears the colors of the spirit."
    },
    {
        title: "Scenary", 
        link: "https://i.pinimg.com/originals/79/35/12/793512fd8c5cee79f3ee59967e8b4913.jpg",
        description: "The poetry of Earth is never dead."
    },
    {
        title: "Mountain Sneeze", 
        link: "https://i.pinimg.com/originals/fb/f1/c3/fbf1c3796e358b3ff373a66f259d9c13.jpg",
        description: "Each fresh peak ascended teaches something."
    },
    {
        title: "Love for Mountains", 
        link: "https://i.pinimg.com/originals/69/ae/cc/69aeccd8789131ee1310cb4db2801235.jpg",
        description: "Over the mountains and through the woods."
    }
];

// Initialize special links data
var special_data = [
    {
        title: "Deepika Padukone", 
        link: "https://i.pinimg.com/originals/ec/4e/80/ec4e8080b790e8f5ea6c9738e943de38.jpg",
    },
    {
        title: "Virat Kohli", 
        link: "https://i.pinimg.com/originals/68/f6/5c/68f65c8ffc760ee6ea3c5e3f23f14eea.jpg",
    },
    {
        title: "Order #1", 
        link: "https://i.pinimg.com/originals/71/a2/63/71a2634da050395eec159535443fbeaa.jpg",
    },
    {
        title: "Order #2", 
        link: "https://i.pinimg.com/originals/92/be/14/92be142e962bba7bc1f047db230d187a.jpg",
    },
    {
        title: "Rohan Ritu", 
        link: "https://i.pinimg.com/originals/85/33/54/8533546f7f1126e68c30e61ccefb20ae.jpg",
    },
    {
        title: "Anirudh Mahuli", 
        link: "https://i.pinimg.com/originals/e5/98/d6/e598d6062411d6b3db75018730e60781.jpg",
    },
    {
        title: "Mom", 
        link: "https://i.pinimg.com/originals/68/f2/3f/68f23f0df231b5356548d4a14b66c746.jpg",
    },
    {
        title: "Dad", 
        link: "https://i.pinimg.com/originals/2b/61/44/2b6144ca0756fab1518e5c2cfc4055cb.jpg",
    },
    {
        title: "Bhaskar Joshi", 
        link: "https://i.pinimg.com/originals/32/c5/b6/32c5b6c7727303dbd70486c277a5e5b1.jpg",
    },
    {
        title: "Emma Watson", 
        link: "https://i.pinimg.com/originals/b5/53/98/b55398629f9718bbbb2182df3adb7a51.jpg",
    },
    {
        title: "MS Dhoni", 
        link: "https://i.pinimg.com/originals/b3/19/d6/b319d6c1d43c04c142db087ce61194a3.jpg",
    },
    {
        title: "APJ Abdul Kalam", 
        link: "https://i.pinimg.com/originals/f5/a4/b0/f5a4b0b935e5435098b4c1c8297ed7c4.jpg",
    },
    {
        title: "Rahul Deshpande", 
        link: "https://i.pinimg.com/originals/20/a2/e1/20a2e1ac7424476588ebafc81f29cac2.jpg",
    },
    {
        title: "Couple Order #1", 
        link: "https://i.pinimg.com/originals/22/f8/8a/22f88a7de94401c6b0abb47c15df0ee4.jpg",
    }
];

// Seed database function
function seedDB(){
	//Remove all links
	artLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
		// Add initialized links to DB
		art_data.forEach(function(seed){
			artLinks.create(seed, function(err, link){
				if(err){console.log(err)}
			link.save();
			});
		});
	console.log("Art links cleaned and added");
    });
     
	//Remove all links
    imageLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
		// Add initialized links to DB
        image_data.forEach(function(seed){
			imageLinks.create(seed, function(err, link){
                if(err){console.log(err)}
			link.save();
			});
		});
	console.log("Image links cleaned and added");
    });

	//Remove all links
    specialLinks.deleteMany({}, function(err){
		if(err){console.log(err);}
		// Add initialized links to DB
        special_data.forEach(function(seed){
            specialLinks.create(seed, function(err, link){
                if(err){console.log(err)}
			link.save();
            });
        });
        console.log("Special links cleaned and added");
    });
}
 
 module.exports = seedDB;
