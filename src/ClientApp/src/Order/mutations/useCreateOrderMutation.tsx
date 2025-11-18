import { gql, type TypedDocumentNode } from "@apollo/client";
import type { CreateOrderRequestInput, CreateOrderResponse } from "../../graphql/generated/graphql";
import { useMutation } from "@apollo/client/react";


export const useCreateOrderMutation = () => {
    const cmd: TypedDocumentNode<CreateOrderResponse, CreateOrderRequestInput> = gql`
        mutation createOrder($createOrder: CreateOrderRequestInput!) {
            createOrder(createOrderRequest: $createOrder) {
            orderId
            checkoutUrl
            }
        }
    `
    const [createOrder, {data, loading, error}] = useMutation(cmd);

    const handleCreateOrder = (input: CreateOrderRequestInput) => {
        createOrder({
            variables: input
        })
    }

    return {handleCreateOrder, data, loading, error}
}