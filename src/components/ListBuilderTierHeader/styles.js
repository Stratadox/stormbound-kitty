const header = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 calc(var(--s-smaller) * -1) var(--s-base)',

  medium: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
}

const name = {
  textTransform: 'uppercase',
  marginTop: 0,
  marginBottom: 0,
  color: 'var(--beige)',
  fontSize: '100%',
  fontWeight: 'normal',
}

const item = {
  paddingBottom: 'var(--s-small)',
  flex: '1 1 100%',

  medium: {
    padding: '0 var(--s-smaller) var(--s-smaller)',
    flexBasis: 'auto',

    ':last-child': {
      flexGrow: 0,
      display: 'block',
    },
  },
}

const move = {
  display: 'inline-block',
  ':last-child': { marginLeft: '1.5em' },
}

const buttons = {
  display: 'none',
  marginBottom: '0.4em',
  marginLeft: 'var(--s-smaller)',

  medium: { display: 'flex' },
}

const styles = { header, name, item, move, buttons }

export default styles
