const Dot = ({ imgURL, r, style }) => {
  return (
    <div
      style={{
        width: r,
        height: r,
        borderRadius: r,
        backgroundImage: `url(${imgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    />
  )
}
export default Dot
