'use client';
import { useState } from 'react';
import './TaskForm.css';

export default function TaskForm({ onClose }: { onClose: () => void }) {
  const [priority, setPriority] = useState('medium');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <h1 className="modal-title">For my future self</h1>
          <div className="modal-task-details">
            <input placeholder="Describe your task" />
            <div className="priority-group">
              <label className="prio-check">
                <input
                  type="radio"
                  name="priority"
                  checked={priority === 'high'}
                  onChange={() => setPriority('high')}
                />
                <span className="custom-check high"></span>
                High
              </label>
              <label className="prio-check">
                <input
                  type="radio"
                  name="priority"
                  checked={priority === 'medium'}
                  onChange={() => setPriority('medium')}
                />
                <span className="custom-check medium"> </span>
                Medium
              </label>
              <label className="prio-check">
                <input
                  type="radio"
                  name="priority"
                  checked={priority === 'low'}
                  onChange={() => setPriority('low')}
                />
                <span className="custom-check low"></span>
                Low
              </label>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="modal-cancel__button"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="modal-add__button" type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
