import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "./App"

type NotesLayoutProps = {
    notes:Note[]

}

export function NoteLayout({notes}:NotesLayoutProps){
    const {id} = useParams()
    const note = notes.find(n=> n.id === id)

    if(note ===null) return <Navigate to="/" replace/>

    return <Outlet context={note}/>
}

    export function useNote(){
        return useOutletContext<Note>()
    }

