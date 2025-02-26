
## **Probabilistic Counting Benchmarking**  
📊 Benchmarking **probabilistic counting techniques** (**Count-Min Sketch, HyperLogLog**) against **exact brute-force counting** using **PostgreSQL & Prisma**.  

### **🔹 Overview**  
This project compares:  
- **Count-Min Sketch (CMS)** vs **Brute-Force PostgreSQL Query**  
- **HyperLogLog (HLL)** vs **Brute-Force PostgreSQL Query**  

### **Metrics Measured**  
✅ **Throughput (Requests/sec)**  
✅ **Latency (Response time)**  
✅ **Memory Usage**  
✅ **Scalability**  

---

## **🛠 Project Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/siddharthaasal/probabilistic-counting-benchmarking.git
cd probabilistic-counting-benchmarking
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up PostgreSQL**  
Ensure you have **PostgreSQL** installed and running.  

Create a `.env` file in the project root with:  
```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/probabilistic_db"
```

### **4️⃣ Initialize Prisma**  
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### **5️⃣ Start the API Server**  
```sh
node server.js
```
> Server runs on **http://localhost:3000**  

### **6️⃣ Run Benchmark Tests**  
```sh
node benchmark.js
```
> Compares **CMS vs. Brute-Force** and **HLL vs. Brute-Force**.  

---

## **🖥 API Endpoints (Planned)**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/cms-query?item=apple` | Estimate count using CMS |
| `GET` | `/db-query?item=apple` | Exact count using PostgreSQL |
| `GET` | `/hll-query?item=apple` | Estimate count using HLL |

> More endpoints may be added as the project progresses.

---

## **📊 Benchmarking Plan**  
We will compare **probabilistic vs. exact counting** across the following conditions:  

1️⃣ **Load Testing:** Measure throughput & latency under concurrent requests.  
2️⃣ **Scalability:** Test performance with increasing dataset sizes.  
3️⃣ **Memory Usage:** Analyze how much memory each method consumes.  

We will use **Autocannon** for benchmarking.  

---

## **🚀 Tech Stack**  
- **Node.js & Express** - API Server  
- **PostgreSQL** - Brute-force database  
- **Prisma ORM** - Simplified database interactions  
- **Count-Min Sketch & HyperLogLog** - Probabilistic counting  
- **Autocannon** - Benchmarking tool  

---

## **📌 TODO List**  
- [ ] Set up Prisma & PostgreSQL schema  
- [ ] Implement CMS-based API endpoint  
- [ ] Implement Brute-Force PostgreSQL query endpoint  
- [ ] Implement HyperLogLog API endpoint  
- [ ] Set up benchmarking script  
- [ ] Document initial results  

---

## **🤝 Contributing**  
PRs are welcome! Open an issue for suggestions or improvements.  

---

## **Contact**
[Linkedin](https://www.linkedin.com/in/siddharthaasal/)