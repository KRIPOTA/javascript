import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export function ChatList({ chats }) {

    return (
        <>
            <h1>ChatList</h1>
            <List>
                {chats.map((item) => (
                    <ListItem key={item.id}>{item.name}</ListItem>
                ))}
            </List>
        </>
    )
}