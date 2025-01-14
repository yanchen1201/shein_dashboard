"use client"

// components
import { IoSearch } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const ProductStockSearch = () => {
	return (
		<div className="w-full flex justify-end place-items-center space-x-2">
			<Input placeholder="輸入商品編號..." className="w-full xl:w-1/2 px-4" />
			<Button variant={"default"} asChild className="w-[32.5px] h-[32.5px] p-1 cursor-pointer">
				<IoSearch size={40} />
			</Button>
		</div>
	)
}
