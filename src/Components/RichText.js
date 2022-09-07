const Span = ({ marks, children }) => (
  <span
    style={{
      display: 'inline',
      fontWeight:
        marks.filter(({ type }) => type === 'bold').length > 0
          ? 'bold'
          : 'normal',
      fontStyle:
        marks.filter(({ type }) => type === 'italic').length > 0
          ? 'italic'
          : 'normal',
      textDecoration:
        marks.filter(({ type }) => type === 'underline').length > 0
          ? 'underline'
          : 'normal',
    }}
  >
    {children}
  </span>
)
const RichText = ({ children, style = {} }) => {
  return (
    <span style={{ ...style }}>
      {children?.map((o, i) => {
        const { nodeType, content, marks, value } = o
        switch (nodeType) {
          case 'heading-1':
            return (
              <h2 key={i}>
                <RichText>{content}</RichText>
              </h2>
            )
          case 'paragraph':
            return (
              <p key={i} style={{ paddingBottom: 20 }}>
                <RichText>{content}</RichText>
              </p>
            )
          case 'unordered-list':
            return (
              <ul key={i}>
                <RichText>{content}</RichText>
              </ul>
            )
          case 'ordered-list':
            return (
              <ol key={i}>
                <RichText>{content}</RichText>
              </ol>
            )
          case 'list-item':
            return (
              <li key={i}>
                <RichText>{content}</RichText>
              </li>
            )
          case 'text':
            return (
              <Span key={i} marks={marks}>
                {value}
              </Span>
            )
          // case 'embedded-entry-inline':
          //   return (
          //     <InlineEntry key={i} style={{ textDecoration: 'underline' }}>
          //       {o.data.target}
          //     </InlineEntry>
          //   )

          // case 'hyperlink':
          //   return (
          //     <A key={i} href={o.data.uri}>
          //       <RichText>{o.content}</RichText>
          //     </A>
          //   )

          default:
            console.log('No Case for', nodeType)
            return null
        }
      })}
    </span>
  )
}
export default RichText
