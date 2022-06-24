import axios from "axios";
const BASE_URL = "http://localhost:3003/api";

// Action Creator
export function getSummary() {
	/**
	 * Requisição assíncrona, ou seja, o request irá armazenar uma promise
	 * A promise será resolvida quando o resultado chegar
	 */
	const request = axios.get(`${BASE_URL}/billingCycles/summary`);
	return {
		type: "BILLING_SUMMARY_FETCHED",
		payload: request,
	};
}
