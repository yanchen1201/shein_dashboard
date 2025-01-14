import { FactoryOrderModal } from "."

const orders: FactoryOrder[] = [
	{
		orderId: "laboris",
		factoryId: "incididunt",
		productId: "est",
		amount: 10000,
		percentage: 0,
		status: "inline",
		orderDate: "3023/02/30 25:61"
	},
	{
		orderId: "fugiat",
		factoryId: "nisi",
		productId: "enim",
		amount: 10000,
		percentage: 20,
		status: "processing",
		orderDate: "3023/02/30 25:61"
	},
	{
		orderId: "nulla",
		factoryId: "proident",
		productId: "veniam",
		amount: 10000,
		percentage: 70,
		status: "processing",
		orderDate: "3023/02/30 25:61"
	},
	{
		orderId: "esse",
		factoryId: "ex",
		productId: "sint",
		amount: 10000,
		percentage: 100,
		status: "shipping",
		orderDate: "3023/02/30 25:61"
	},
	{
		orderId: "minim",
		factoryId: "quis",
		productId: "laborum",
		amount: 10000,
		percentage: 40,
		status: "processing",
		orderDate: "3023/02/30 25:61"
	}
]

export const FactoryOrders = () => {
	return (
		<div className="h-full flex flex-col space-y-6 p-7 bg-neutral-500/90 rounded-[32px] overflow-hidden overflow-y-scroll">
			{orders.map((order) => (
				<FactoryOrderModal
					orderId={order.orderId}
					orderDate={order.orderDate}
					status={order.status}
					percentage={order.percentage}
				/>
			))}
		</div>
	)
}
