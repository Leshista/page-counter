import { useState } from 'react';
import Backdrop from './components/Backdrop';
import Form from './components/Form';
import FormButton from './components/FormButton';
import Note from './components/Note';
import Nothing from './components/Nothing';

import './main.css';

function App() {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [backdropIsOpen, setBackdropIsOpen] = useState(false);
    const [backdropMessage, setBackdropMessage] = useState('');
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(0);

    const formOpenHandler = () => {
        setFormIsOpen(!formIsOpen);
    };

    const SubmitHandler = (event) => {
        event.preventDefault();
        if (event.target[0].value.trim().length === 0) {
            console.log('name is empty!');
            setBackdropIsOpen(true);
            setBackdropMessage(
                'Book name is empty! Please type in a book name!'
            );
        } else if (event.target[1].value.trim().length === 0) {
            setBackdropIsOpen(true);
            setBackdropMessage(
                'Pages count is empty! Please type in a valid pages count!'
            );
        } else if (event.target[1].value.trim() < 0) {
            setBackdropIsOpen(true);
            setBackdropMessage(
                'Pages cannot be negative! Please type in a valid pages count!'
            );
        } else {
            setItems((prevItems) => [
                ...prevItems,
                {
                    book: event.target[0].value,
                    pages: event.target[1].value,
                    id: itemId,
                    key: itemId,
                },
            ]);
            setItemId(itemId + 1);
            setFormIsOpen(!formIsOpen);
        }
    };

    const deleteHandler = (event) => {
        setItems(items.filter((item) => item.id !== Number(event.target.id)));
    };

    const backdropCancelHandler = () => {
        setBackdropIsOpen(!backdropIsOpen);
    };

    return (
        <main className="main">
            {formIsOpen ? (
                <Form onAddNote={SubmitHandler} />
            ) : (
                <FormButton changeFormIsOpenState={formOpenHandler} />
            )}
            {items.length !== 0 ? (
                items.map((object) => (
                    <Note
                        book={object.book}
                        pages={object.pages}
                        id={object.id}
                        key={object.key}
                        onDelete={deleteHandler}
                    />
                ))
            ) : (
                <Nothing />
            )}
            {backdropIsOpen && (
                <Backdrop
                    backdropMessage={backdropMessage}
                    onCancel={backdropCancelHandler}
                />
            )}
        </main>
    );
}

export default App;
