import React from 'react';

export const MetaBlock = ({ rows }) => (
  <table className="q-meta">
    <thead><tr>{rows[0].map((c, i) => <th key={i} colSpan={c.colspan}>{c.text}</th>)}</tr></thead>
    <tbody>{rows.slice(1).map((r, i) => (
      <tr key={i}>{r.map((c, j) => <td key={j} colSpan={c.colspan} rowSpan={c.rowspan}>{c.text}</td>)}</tr>
    ))}</tbody>
  </table>
);

// tables kabhi text nahi — sanitized original HTML hi render hoti hai
export const TableBlock = ({ html }) => (
  <div className="q-table" dangerouslySetInnerHTML={{ __html: html }} />
);

export const TextBlock = ({ text }) => <p className="q-text">{text}</p>;
export const SubpartBlock = ({ text }) => <p className="q-subpart">{text}</p>;
export const ImageBlock = ({ src, alt }) => <img className="q-img" src={src} alt={alt} />;
export const AnswerBlock = ({ text }) => <div className="q-answer">{text}</div>;

export const McqBlock = ({ options, answer }) => {
  const [show, setShow] = React.useState(!!answer && false);
  return (
    <div className="q-mcq">
      <ol className="q-options">{options.map((o, i) => <li key={i}>{o}</li>)}</ol>
      {answer && <>
        <button className="pill" onClick={() => setShow(!show)}>
          {show ? 'Hide Answer' : 'Show Answer'}
        </button>
        {show && <div className="q-answer"><u>Answer</u><p>{answer}</p></div>}
      </>}
    </div>
  );
};

export const BLOCKS = {
  meta: MetaBlock, table: TableBlock, text: TextBlock, subpart: SubpartBlock,
  image: ImageBlock, answer: AnswerBlock, mcq: McqBlock
};
