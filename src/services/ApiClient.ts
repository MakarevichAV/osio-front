class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async post(endpoint: string, body?: any) {
        try {
            const res = await fetch(`${this.baseUrl}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!res.ok) {
                // Можно распарсить тело ошибки, если сервер что-то возвращает
                const errorText = await res.text();
                return { success: false, error: errorText || `HTTP ${res.status}` };
            }

            const data = await res.json();
            return { success: true, data };

        } catch (err: any) {
            // Ловим сетевые ошибки или другие исключения
            console.error("API Error:", err);
            return { success: false, error: err.message };
        }
    }

    private async get(endpoint: string) {
        try {
            const res = await fetch(`${this.baseUrl}${endpoint}`);
            if (!res.ok) {
                const errorText = await res.text();
                return { success: false, error: errorText || `HTTP ${res.status}` };
            }
            const data = await res.json();
            return { success: true, data };
        } catch (err: any) {
            console.error("API Error:", err);
            return { success: false, error: err.message };
        }
    }

    // API методы
    sendSet(newSet: string) {
        return this.post(`/sendSet/${newSet}`);
    }

    startHeating() {
        return this.post("/start-heating");
    }

    startWinding() {
        return this.post("/start-winding");
    }

    setSetpoint(value: number) {
        return this.post("/set-setpoint", { value });
    }

    stopHeating() {
        return this.post("/stop-heating");
    }

    getRecipes() {
        return this.get("/recipes");
    }
}

// Экземпляр для всего приложения
const api = new ApiClient("http://localhost:3001/api");
export default api;