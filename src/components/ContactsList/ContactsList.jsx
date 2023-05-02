import React from 'react'

export function ContactsList(contacts) {
  return (
    <ul>
        {contacts.map(contact => {
            return (
                <li key={contact.id}>
                <span>{contact.name}</span>:
                <span>{contact.number}</span>
                <button>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}
