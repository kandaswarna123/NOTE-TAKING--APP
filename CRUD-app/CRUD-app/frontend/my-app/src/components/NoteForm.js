// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { createNote, getNoteById, updateNote } from '../services/api';
// import Notification from './Notification';

// const NoteForm = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [error, setError] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       getNoteById(id)
//         .then(note => {
//           setTitle(note.title);
//           setContent(note.content);
//         })
//         .catch(err => setError(err.message));
//     }
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         await updateNote(id, title, content);
//       } else {
//         await createNote(title, content);
//       }
//       navigate('/notes'); // Redirect to notes page after successful submission
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{id ? 'Edit Note' : 'Create Note'}</h2>
//       {error && <Notification message={error} />}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '3px', border: '1px solid #ccc' }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Content</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '3px', border: '1px solid #ccc', minHeight: '150px' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>{id ? 'Update' : 'Create'}</button>
//       </form>
//     </div>
//   );
// };

// export default NoteForm;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createNote, getNoteById, updateNote } from '../services/api';
import Notification from './Notification';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getNoteById(id)
        .then(note => {
          setTitle(note.title);
          setContent(note.content);
        })
        .catch(err => setError(err.message));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateNote(id, title, content);
      } else {
        await createNote(title, content);
      }
      navigate('/notes'); // Redirect to notes page after successful submission
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{id ? 'Edit Note' : 'Create Note'}</h2>
      {error && <Notification message={error} />}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '100px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
