import React from 'react';
import { BLOCKS } from './blocks';

export default function QuestionView ({ q, index, total, onPrev, onNext, onClose, notes, setNotes }) {
  const [showNotes, setShowNotes] = React.useState(false);
  const hasBoth = q.flow.some(f => f.startsWith('toggle:'));
  const [mode, setMode] = React.useState(hasBoth ? 'both' : 'question');

  const render = b => {
    const C = BLOCKS[b.type];
    if (!C) return null;
    if (b.type === 'answer' && mode === 'question') return null;
    if (b.type !== 'answer' && mode === 'answer' && b.type !== 'meta') return null;
    return <C key={Math.random()} {...b} />;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {hasBoth && (
          <div className="mode-row">
            {['both', 'question', 'answer'].map(m => (
              <button key={m} className={`pill ${mode === m ? 'active' : ''}`} onClick={() => setMode(m)}>
                {m[0].toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        )}
        {q.blocks.map(render)}
        <div className="modal-footer">
          <button className="pill" disabled={index === 0} onClick={onPrev}>Previous</button>
          <button className="pill" disabled={index === total - 1} onClick={onNext}>Next</button>
          <button className="pill" onClick={() => setShowNotes(!showNotes)}>Notes</button>
        </div>
        {showNotes && <textarea value={notes} onChange={e => setNotes(e.target.value)} />}
      </div>
    </div>
  );
}
