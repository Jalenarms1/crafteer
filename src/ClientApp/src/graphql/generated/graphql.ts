/* eslint-disable */
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type ActionResponseOfIdentityUserAndAuthenticationError = {
  __typename?: 'ActionResponseOfIdentityUserAndAuthenticationError';
  data?: Maybe<IdentityUser>;
  error: AuthenticationError;
  responseType: ActionResponseType;
};

export enum ActionResponseType {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

export type AuthDtoInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum AuthenticationError {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  Unknown = 'UNKNOWN',
  UserNotFound = 'USER_NOT_FOUND'
}

export type CheckoutMutations = {
  __typename?: 'CheckoutMutations';
  createCheckoutSession: Scalars['String']['output'];
};


export type CheckoutMutationsCreateCheckoutSessionArgs = {
  checkoutRequest: CheckoutRequestInput;
};

export type CheckoutRequestInput = {
  customerId: Scalars['Int']['input'];
  orderId: Scalars['Int']['input'];
  orderItems: Array<OrderItemInput>;
};

export type CreateOrderRequestInput = {
  createdAt: Scalars['DateTime']['input'];
  customer: CustomerInput;
  customerId: Scalars['Int']['input'];
  orderId: Scalars['Int']['input'];
  orderItems: Array<OrderItemInput>;
  orderStatus: OrderStatus;
  subtotal: Scalars['Long']['input'];
  tax: Scalars['Long']['input'];
};

export type CreateOrderResponse = {
  __typename?: 'CreateOrderResponse';
  checkoutUrl: Scalars['URL']['output'];
  orderId: Scalars['Int']['output'];
};

export type CustomerInput = {
  createdDate: Scalars['DateTime']['input'];
  customerEmail: Scalars['String']['input'];
  customerId: Scalars['Int']['input'];
  customerName: Scalars['String']['input'];
  customerPassword: Scalars['String']['input'];
  customerPhone: Scalars['String']['input'];
  lastSignIn: Scalars['DateTime']['input'];
};

export type IdentityUser = {
  __typename?: 'IdentityUser';
  accessFailedCount: Scalars['Int']['output'];
  concurrencyStamp?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  normalizedEmail?: Maybe<Scalars['String']['output']>;
  normalizedUserName?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberConfirmed: Scalars['Boolean']['output'];
  securityStamp?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  userName?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: CreateOrderResponse;
  loginUser: ActionResponseOfIdentityUserAndAuthenticationError;
  sayHello: Scalars['String']['output'];
};


export type MutationCreateOrderArgs = {
  createOrderRequest: CreateOrderRequestInput;
};


export type MutationLoginUserArgs = {
  authDto: AuthDtoInput;
};


export type MutationSayHelloArgs = {
  order: OrderInput;
};

export type OrderInput = {
  createdAt: Scalars['DateTime']['input'];
  customer: CustomerInput;
  customerId: Scalars['Int']['input'];
  orderId: Scalars['Int']['input'];
  orderItems: Array<OrderItemInput>;
  orderStatus: OrderStatus;
  subtotal: Scalars['Long']['input'];
  tax: Scalars['Long']['input'];
};

export type OrderItemInput = {
  orderItemId: Scalars['Int']['input'];
  product: ProductInput;
  quantity: Scalars['Int']['input'];
};

export enum OrderStatus {
  Checkout = 'CHECKOUT',
  Confirmed = 'CONFIRMED',
  Placed = 'PLACED',
  Shipped = 'SHIPPED'
}

export type ProductInput = {
  inStock: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Long']['input'];
  productId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
};

