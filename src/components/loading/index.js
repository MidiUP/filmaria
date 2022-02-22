import { CircularProgress } from "@mui/material";
import './loading.css'

export function Loading() {
    return (
        <div className="loading">
            <CircularProgress />
        </div>
    )
}