const enum Episode {
  PHANTOM_MENACE = 1,
  ATTACK_CLONES,
  REVENGE_SITH,
  NEW_HOPE,
  EMPIRE_STRIKE_BACK,
  RETURN_JEDI
}

export const mapImagePoster = (episode: number): string => {
  switch (episode) {
    case Episode.PHANTOM_MENACE:
      return '/img/film-poster/Star-Wars-Phantom-Menace-I.webp'
    case Episode.ATTACK_CLONES:
      return '/img/film-poster/Star-Wars-Attack-Clones-II.webp'
    case Episode.REVENGE_SITH:
      return '/img/film-poster/Star-Wars-Revenge-Sith-III.jpeg'
    case Episode.NEW_HOPE:
      return '/img/film-poster/Star-Wars-New-Hope-IV.webp'
    case Episode.EMPIRE_STRIKE_BACK:
      return '/img/film-poster/Star-Wars-Empire-Strikes-Back-V.webp'
    case Episode.RETURN_JEDI:
      return '/img/film-poster/Star-Wars-Return-Jedi-VI.jpeg'
    default:
      return 'https://via.placeholder.com/150'
  }
}
