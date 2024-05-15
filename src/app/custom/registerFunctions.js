import axios from "axios"

export const registerEmployee = async (user) => {
	try {
		return await axios.post("/api/employee-signup", user, {
			headers: { "Content-Type": "application/json" },
		})
	} catch (e) {
		return { error: true, msg: e.response.data.msg }
	}
}

export const registerEmployer = async (user) => {
	try {
		return await axios.post("/api/employer-signup", user, {
			headers: { "Content-Type": "application/json" },
		})
	} catch (e) {
		return { error: true, msg: e && e.response.data.error }
	}
}

export const fetchEmployers = async () => {
    try {
        return await axios.get("/api/employers/all")
    } catch (e) {
        return { error: true, msg: e.response.data.error }
    }
}
