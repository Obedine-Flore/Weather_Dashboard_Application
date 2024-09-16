import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "./api"
import { WeatherData, IQuery } from "../types/Weather"

export const fetchWeatherData = createAsyncThunk<WeatherData, IQuery>('weather/fetchData', async({key, query}, thunkAPI) => {
    try{
        const response = await axios.get("", {
            params:{
                key,
                query,
                days: '7'
            }
        })

        return response.data
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})