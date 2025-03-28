import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IScore} from "../../types/IScore.ts";


const initialState: IScore = {
    score: parseInt(localStorage.getItem("score") as string) || 0,
    scoreTapNumber: parseInt(localStorage.getItem("scoreTapNumber") as string) || 1,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setScore: (state: IScore, action: PayloadAction<IScore>) => {
            state.score = action.payload.score;
            state.scoreTapNumber = action.payload.scoreTapNumber
        },
        scoreIncrement: (state: IScore) => {
            state.score += state.scoreTapNumber
        },
        scoreMinus: (state: IScore, action: PayloadAction<number>) => {
            state.score -= action.payload
        },
        scoreTapNumberIncrease: (state: IScore)=> {
            state.scoreTapNumber += 1
        }
    }
})
export default scoreSlice.reducer;
