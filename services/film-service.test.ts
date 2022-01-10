import { mapImagePoster } from './film-service'

describe('Film Service', () => {
  describe('mapImagePoster', () => {
    it('return Star Wars: Phamtom Menace poster', () => {
      expect(mapImagePoster(1)).toBe(
        '/img/film-poster/Star-Wars-Phantom-Menace-I.webp'
      )
    })

    it('return Star Wars: Attack Clones poster', () => {
      expect(mapImagePoster(2)).toBe(
        '/img/film-poster/Star-Wars-Attack-Clones-II.webp'
      )
    })

    it('return Star Wars: Revenge Sith poster', () => {
      expect(mapImagePoster(3)).toBe(
        '/img/film-poster/Star-Wars-Revenge-Sith-III.jpeg'
      )
    })

    it('return Star Wars: New Hope poster', () => {
      expect(mapImagePoster(4)).toBe(
        '/img/film-poster/Star-Wars-New-Hope-IV.webp'
      )
    })

    it('return Star Wars: Empire Strike Back poster', () => {
      expect(mapImagePoster(5)).toBe(
        '/img/film-poster/Star-Wars-Empire-Strikes-Back-V.webp'
      )
    })

    it('return Star Wars: Return Jedi poster', () => {
      expect(mapImagePoster(6)).toBe(
        '/img/film-poster/Star-Wars-Return-Jedi-VI.jpeg'
      )
    })

    it('return placeholder image if episode is not registered', () => {
      expect(mapImagePoster(99)).toBe('https://via.placeholder.com/150')
    })
  })
})
