export interface Task {
    id?: number; // Cuando se guarda la tarea tiene id, antes no
    text: string;
    day: string;
    reminder: boolean; 
}