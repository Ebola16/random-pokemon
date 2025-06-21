# Random Pokémon HOME Animated GIF

Get a random Pokémon HOME animated gif from [random-pokemon-data](https://github.com/Ebola16/random-pokemon-data). A case-insensitive "r" query parameter ([RE2 regex](https://www.npmjs.com/package/re2), which is regex without backreferences and lookahead assertions) is supported. A case-insensitive "e" query parameter (exclude) is also supported that excludes matches separated by commas. These filter the contents of `/data/images.json`. Artificial intelligence tools are helpful for learning how to generate RE2 regex.

Pokémon assets are ©2025 Nintendo, Creatures Inc., and GAME FREAK inc.
All trademarks and copyrights are property of their respective owners.
These assets are used here under fair use for non-commercial, educational, and fan-based purposes.
No affiliation or endorsement by Nintendo, Creatures Inc., GAME FREAK, or The Pokémon Company is implied.

Pokémon HOME images Gen I - IX provided by [@zim_](https://x.com/zim_)

---

### Examples

- **Get a random Pokémon:**  
  [`https://random-pokemon.vercel.app`](https://random-pokemon.vercel.app)

- **Get a random normal (non-shiny) Pokémon:**  
  [`https://random-pokemon.vercel.app/?r=normal/`](https://random-pokemon.vercel.app/?r=normal/)

- **Get a random shiny Pokémon:**  
  [`https://random-pokemon.vercel.app/?r=shiny/`](https://random-pokemon.vercel.app/?r=shiny/)

- **Get a random normal Gen 1 (Pokedex numbers 0000 - 0151) Pokémon:**  
  [`https://random-pokemon.vercel.app/?r=normal/.*0(0[0-9][0-9]|1[0-4][0-9]|150|151)`](https://random-pokemon.vercel.app/?r=normal/.*0(0[0-9][0-9]|1[0-4][0-9]|150|151))

- **Get a random normal Gen 1 (0000 - 0151) Pokémon excluding alternative forms (file name contains parenthesis) and megas:**  
  [`https://random-pokemon.vercel.app/?e=(,),mega &r=normal/.*0(0[0-9][0-9]|1[0-4][0-9]|150|151)`](https://random-pokemon.vercel.app/?e=(,),mega%20&r=normal/.*0(0[0-9][0-9]|1[0-4][0-9]|150|151))

- **Get a random Gen 1 (0000 - 0151) or Gen 3 (0252 - 0386) Pokémon:**  
  [`https://random-pokemon.vercel.app/?r=(000[0-9]|00[1-9][0-9]|01[0-4][0-9]|015[0-1]|025[2-9]|02[6-9][0-9]|03[0-7][0-9]|038[0-6])`](https://random-pokemon.vercel.app/?r=(000[0-9]|00[1-9][0-9]|01[0-4][0-9]|015[0-1]|025[2-9]|02[6-9][0-9]|03[0-7][0-9]|038[0-6]))

- **Get a random form of Unown**  
  [`https://random-pokemon.vercel.app/?=unown`](https://random-pokemon.vercel.app/?r=unown)

- **Get a random normal Mega (use a space after mega so you don't accidently include Meganium)**  
  [`https://random-pokemon.vercel.app/?r=normal/.*mega .*`](https://random-pokemon.vercel.app/?r=normal/.*mega%20.*)