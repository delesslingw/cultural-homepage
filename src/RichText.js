import { useState } from 'react'
// import useModal from './hooks/useModal'
// import styles from './styles'
// import { InfoIcon, GoIcon, DownloadIcon, LinkIcon } from './Icons'

import COLORS from './COLORS'
// const Link = ({ children, style, data, Icon, color = COLORS.red }) => {
//   const [active, setActive] = useState(false)
//   const toggleActive = () => setActive((b) => !b)
//   const { openModal } = useModal()
//   return (
//     <span
//       onMouseEnter={toggleActive}
//       onMouseLeave={toggleActive}
//       onMouseUp={() => openModal(data)}
//       style={{
//         ...styles.link,
//         backgroundColor: active ? hex(color, 0.4) : hex(color, 0.2),
//         ...style,
//       }}
//     >
//       <span style={styles.linkText}>{children}</span>
//       {Icon ? (
//         <span style={styles.linkIcon}>
//           <Icon size='0.9rem' style={{ verticalAlign: 'center' }} />
//         </span>
//       ) : null}
//     </span>
//   )
// }
// const InlineEntry = ({ children, style }) => {
//   const { fields, sys } = children
//   // const title = fields.entryTitle || fields.title
//   switch (sys.contentType.sys.id) {
//     case 'glossaryEntry':
//       return (
//         <Link Icon={InfoIcon} data={children} color={COLORS.yellow}>
//           {fields.entryTitle}
//         </Link>
//       )
//     case 'curriculumResource':
//       return (
//         <Link data={children} Icon={DownloadIcon} color={COLORS.orange}>
//           {fields.resourceTitle}
//         </Link>
//       )
//     case 'lessonPlan':
//       return (
//         <Link data={children} Icon={GoIcon} color={COLORS.teal}>
//           {fields.title}
//         </Link>
//       )
//     default:
//       console.log('no case for', sys.contentType.sys.id)
//       return null
//   }
//   // return <Link data={children}>{title}</Link>
// }
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
const A = ({ href, children }) => {
  const [active, setActive] = useState(false)
  return (
    <a
      href={href}
      style={{
        backgroundColor: COLORS.blue,
        textDecoration: 'none',
        color: 'black',
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span>{children}</span>

      <span></span>
    </a>
  )
}
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
              <p key={i} style={{}}>
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
