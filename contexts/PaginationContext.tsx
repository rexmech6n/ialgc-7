"use client"
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";


type ContextValue<DataStore> = {
    pageNum: number, setPageNum: Dispatch<SetStateAction<number>>,
    data: DataStore | undefined, setData: Dispatch<SetStateAction<DataStore | undefined>>,
    totalPages: number, setTotalPages: Dispatch<SetStateAction<number>>
}

type PaginationContextProviderProps<DataStore> = {
    children: ReactNode,
    initialValue?: DataStore
}

export const PaginationContext = createContext<ContextValue<any>>(null!)

export const PaginationContextProvider = <DataStore,>({children} : PaginationContextProviderProps<DataStore>) => {
    const [pageNum, setPageNum] = useState(1)
    const [data, setData] = useState<DataStore>()
    const [totalPages, setTotalPages] = useState<number>(100)

    const contextValue = {
        pageNum, setPageNum,
        data, setData,
        totalPages, setTotalPages
    }

    return (
        <PaginationContext.Provider value={contextValue}>
            {children}
        </PaginationContext.Provider>
    )
}

export const usePagination = <DataStore,>() => {
    const context = useContext(PaginationContext)
    if(!context) throw new Error("usePagination cannot be used outside of PaginationContext")
    return context as ContextValue<DataStore>
}