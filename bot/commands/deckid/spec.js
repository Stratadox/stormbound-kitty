import command from './'
const deckid = command.handler.bind(command)

const BASE_URL = 'https://stormbound-kitty.com/deck/'

describe('Bot — !deckid', () => {
  it('should return nothing for a missing term', () => {
    expect(deckid('')).toEqual(undefined)
  })

  it('should default to level 1 for no mentioned levels', () => {
    expect(
      deckid('gp,sm,dopp,gr,start,rg,uh,wild,forg,pog,sg,dev').url
    ).toEqual(BASE_URL + '1xn1n2s1n3s24s2n63n67s6n15s8s11')
  })

  it('should handle leading deck level', () => {
    expect(
      deckid('5 gp,sm,dopp,gr,start,rg,uh,wild,forg,pog,sg,dev').url
    ).toEqual(BASE_URL + '5xn1n2s1n3s24s2n63n67s6n15s8s11')
  })

  it('should handle trailing deck level', () => {
    expect(
      deckid('gp,sm,dopp,gr,start,rg,uh,wild,forg,pog,sg,dev 5').url
    ).toEqual(BASE_URL + '5xn1n2s1n3s24s2n63n67s6n15s8s11')
  })

  it('should handle card levels', () => {
    expect(
      deckid('gp 1,2sm,3 dopp,gr4,5  start,rg,uh,wild,forg,pog,sg,dev').url
    ).toEqual(BASE_URL + '1n12n23s14n35s241s21n631n671s61n151s81s11')
  })

  it('should handle card level and deck level', () => {
    expect(
      deckid('gp 1,2sm,3 dopp,gr4,5  start,rg,uh,wild,forg,pog,sg,dev 3').url
    ).toEqual(BASE_URL + '1n12n23s14n35s243s23n633n673s63n153s83s11')
  })

  it('should cap the deck length at 12', () => {
    expect(
      deckid('gp,sm,dopp,gr,start,rg,uh,wild,forg,pog,sg,dev,5lawles').url
    ).not.toContain('5n2')
  })

  it('should prevent duplicates', () => {
    expect(deckid('salty,5 salty').url).toEqual(BASE_URL + '1n52')
  })

  it('should return nothing for a no-match', () => {
    expect(deckid('flksdjf')).toEqual(undefined)
  })

  it('should ignore unknown terms', () => {
    const output = deckid('gp,qsdkljsk,gr')

    expect(output.url).toContain('1n11n3')
    expect(output.fields.pop().value).toContain('qsdkljsk')
  })
})
