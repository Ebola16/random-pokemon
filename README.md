# Random Pokémon HOME Animated GIF

Get a random Pokémon HOME animated gif from [random-pokemon-data](https://github.com/Ebola16/random-pokemon-data). A case-insensitive `regex` query parameter is supported (runs on client side in a web worker with timeout and some sanitization features). The regex filters the contents of `/data/images.json`. Artificial intelligence tools are helpful for learning how to generate regex.

Pokémon assets are ©2025 Nintendo, Creatures Inc., and GAME FREAK inc.
All trademarks and copyrights are property of their respective owners.
These assets are used here under fair use for non-commercial, educational, and fan-based purposes.
No affiliation or endorsement by Nintendo, Creatures Inc., GAME FREAK, or The Pokémon Company is implied.

Pokémon HOME images Gen I - IX provided by [@zim_](https://x.com/zim_)

---

### Examples

- **Get a random Pokémon:**  
  [`https://ebola16.github.io/random-pokemon`](https://ebola16.github.io/random-pokemon)

- **Get a random normal (non-shiny) Pokémon:**  
  [`https://ebola16.github.io/random-pokemon/?regex=normal/`](https://ebola16.github.io/random-pokemon/?regex=normal/)

- **Get a random shiny Pokémon:**  
  [`https://ebola16.github.io/random-pokemon/?regex=shiny/`](https://ebola16.github.io/random-pokemon/?regex=shiny/)

- **Get a random normal Gen 1 (Pokedex numbers 0000 - 0151) Pokémon:**  
  [`https://ebola16.github.io/random-pokemon/?regex=normal/.*0(0[0-9][0-9]|1[0-4][0-9]|150|151)`](https://ebola16.github.io/random-pokemon/?regex=normal/.*0(0[0-9][0-9]|1[0-4][0-9]|150|151))

- **Get a random normal Gen 1 (0000 - 0151) Pokémon excluding alternative forms (file name contains parenthesis) and megas:**  
  [`https://ebola16.github.io/random-pokemon/?regex=^(?!.*(\(|\)|Mega)).*normal/.*(000[0-9]|00[1-9][0-9]|01[0-4][0-9]|015[0-1])`](https://ebola16.github.io/random-pokemon/?regex=%5E%28%3F%21.%2A%28%5C%28%7C%5C%29%7CMega%29%29.%2Anormal%2F.%2A%28000%5B0-9%5D%7C00%5B1-9%5D%5B0-9%5D%7C01%5B0-4%5D%5B0-9%5D%7C015%5B0-1%5D%29)

- **Get a random normal Gen 1 (0000 - 0151) or Gen 3 (0252 - 0386) Pokémon:**  
  [`https://ebola16.github.io/random-pokemon/?regex=(000[0-9]|00[1-9][0-9]|01[0-4][0-9]|015[0-1]|025[2-9]|02[6-9][0-9]|03[0-7][0-9]|038[0-6])`](https://ebola16.github.io/random-pokemon/?regex=(000[0-9]|00[1-9][0-9]|01[0-4][0-9]|015[0-1]|025[2-9]|02[6-9][0-9]|03[0-7][0-9]|038[0-6]))

- **Get a random form of Unown**  
  [`https://ebola16.github.io/random-pokemon/?regex=unown`](https://ebola16.github.io/random-pokemon/?regex=unown)