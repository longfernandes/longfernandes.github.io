import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk load toàn bộ menu
export const fetchMenuList = createAsyncThunk("menu/fetchList", async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    if (!res.ok) throw new Error("Load menu thất bại");
    const data = await res.json();
    return data.recipes.map((item) => ({
        ...item,
        price: item.price ?? (Math.random() * 20 + 5).toFixed(2),
    }));
});

// Thunk load chi tiết 1 món
export const fetchMenuItem = createAsyncThunk("menu/fetchById", async (id) => {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!res.ok) throw new Error("Load chi tiết thất bại");
    const data = await res.json();
    return {
        ...data,
        price: data.price ?? (Math.random() * 20 + 5).toFixed(2),
    };
});

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        list: [],
        item: null,
        statusList: "idle", // idle | loading | succeeded | failed
        statusItem: "idle",
        errorList: null,
        errorItem: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // List
            .addCase(fetchMenuList.pending, (state) => {
                state.statusList = "loading";
                state.errorList = null;
            })
            .addCase(fetchMenuList.fulfilled, (state, action) => {
                state.statusList = "succeeded";
                state.list = action.payload;
            })
            .addCase(fetchMenuList.rejected, (state, action) => {
                state.statusList = "failed";
                state.errorList = action.error.message;
            })
            // Detail
            .addCase(fetchMenuItem.pending, (state) => {
                state.statusItem = "loading";
                state.errorItem = null;
            })
            .addCase(fetchMenuItem.fulfilled, (state, action) => {
                state.statusItem = "succeeded";
                state.item = action.payload;
            })
            .addCase(fetchMenuItem.rejected, (state, action) => {
                state.statusItem = "failed";
                state.errorItem = action.error.message;
            });
    },
});

export default menuSlice.reducer;
