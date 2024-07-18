import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllNotes, deleteNote } from '../services/api';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getAllNotes();
      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Notes</h2>
      <Link to="/notes/add" style={styles.addLink}>Add Note</Link>
      <ul style={styles.list}>
        {notes.map(note => (
          <li key={note._id} style={styles.listItem}>
            <h3 style={styles.noteTitle}>{note.title}</h3>
            <p style={styles.noteContent}>{note.content}</p>
            <div style={styles.buttonContainer}>
              <button style={styles.editButton}>
                <Link to={`/notes/edit/${note._id}`} style={styles.link}>Edit</Link>
              </button>
              {/* <button style={styles.deleteButton} onClick={() => handleDelete(note._id)}>Delete</button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  addLink: {
    display: 'inline-block',
    marginBottom: '20px',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  noteTitle: {
    margin: '0 0 10px 0',
  },
  noteContent: {
    margin: '0 0 10px 0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  deleteButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default NoteList;
