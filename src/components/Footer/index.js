import './index.css'

const Footer = props => {
  const {textCenter} = props
  const myTextClass = textCenter ? 'my-text text-center' : 'my-text'
  return (
    <div className="my-text-container">
      <p className={myTextClass}>
        WebApp built by Rajesh R <br />
        To see my LinkedIn Profile{' '}
        <a
          href="https://www.linkedin.com/in/raajjeshreddy/"
          target="_blank"
          rel="noreferrer"
        >
          Click Here
        </a>
        <br />
        For Source Code{' '}
        <a
          href="https://github.com/rajeshreddyy/Nxt-Trendz"
          target="_blank"
          rel="noreferrer"
        >
          Click Here
        </a>
      </p>
    </div>
  )
}
export default Footer
