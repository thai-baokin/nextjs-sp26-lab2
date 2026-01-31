export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: "New" | "Sale";
}

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium noise cancelling, 20h battery life with fast charging case.",
        price: 199.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDburRTvIXrD7-izqISFzbDdbEQ54KSFF4iUS4ZjeodUeGjc0qSw9Ygnz3br3y72PvZ7shuk3PNtplMM19_eVn48TLnQmDkXiYMhS5FgcjQ7Ws2aWHIAv7R63ePLs62VdwQy0h-bvrJv9SRydWPKNNpZgqMHFUUmmfEosaZQPlvkFSCFNPRSwJOOsz1sWGUwhlCpDH9YahTt7R1uWOZuAMtEwUHBd4MZlcmjxwSVfg8H_vH3tdKPhk2-UNiNnvRozKA8uib10qYnR2u",
        badge: "New"
    },
    {
        id: 2,
        name: "Smart Watch Series 7",
        description: "Fitness tracking, heart rate monitor, sleep analysis.",
        price: 349.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD44ghqEnlFaaZZAjzfUfyCBX9xrQhW32Fv_OpQ8ncFaNJO2_k92AdX1u673icSGJcIFFEBiaj8wZY-W3vgrkTY1cj-iwzdaWxQp-ZweIcVzVtezYHxit4dCGEcwjoIAsTA9lmjtUY2nvRhfuFwG8L8GUL-pB-jhgTrxvbmlyDkQQO3tpck5bnLf_82FNqY8Vh0wWFlv6B9gUI7_bgIsC3PfGuBaz3d4F_I5_vzJKezv_y348dLN8MgL5mpzGA5OfBICvtWJO1XfjWy"
    },
    {
        id: 3,
        name: "Pro Laptop 14\"",
        description: "M1 Chip, 16GB RAM, 512GB SSD, Space Gray finish.",
        price: 1299.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWeBqnPPTAVbWoyUmzLbNQnoLzr2I9rOxTT3gbI3gjwetgRwoDMtx2nE5Soja7hz45wl5rvjqxvrlaNUYCreOkeUy5vepTmDmZA7tAEIhT9v-K45VAoxEayg9XdG7EwshUezxgc34NTHDS538PxSRk5-n7wy-pwpm-txPu76b_vaOQ9eLj_Ahn8_y7qMGTqATSgdO_MTNmia8IRAW2e5rz3tHJYKYSUzz-Jnnu7ROok5Wgcyy8G7_Zt9nB2ksiJkInk2z7tnkiojTN"
    },
    {
        id: 4,
        name: "Retro Camera",
        description: "Vintage style digital camera with 24MP sensor and 4K video.",
        price: 899.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDllbwUm7Gyb_NWudy1-fMZJZRuET7ylllgzrD1neKzcukeMAcg0lPkBVmrzgX7lp1FKFNz3FQsABfyqT_JbkkizWwk6jni8y6rPP1HF6s68irUIzTbDEnlMMnBzGtUjQlIJDzyW8IGLm4LtlVuX9LVxv7wvil4fTblN0debIQ8gtVNJBkOwSCuEwWlIAlNxr344IqBnlmYeMWeR2pvgBbE0FTA87Yjne1cepjWVEgRlRvM8zfPkS0CIbmbURgDQCHROO1yxoB9YKsl"
    },
    {
        id: 5,
        name: "Ergo Chair Plus",
        description: "Fully adjustable ergonomic chair for maximum comfort.",
        price: 450.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQXdFDoAvySeXrbR0bsBXWaOTQj9bFN85KeuIv2hVQhBjjw0o6O5h3hzn-dQSM0--WjKhG94bSxff23LU1BBNZoa2a91OODsbDHI1OlH366b0MsAGr8h5y7DXIKpwtOWawfwQXa9NZo4-ZErEvMfqZThK6iFmU0M1Wdqvp2mEiCT6F2IWqEtDmxWTCHtfONu4bUdX66HfDm2zM5tL4mEEUJszUWsFgJ13u7vlkcLzq1bQ6kM5Jt_Bfg3mdJPY6h-ZIC_S-Vm6MQ_j6"
    },
    {
        id: 6,
        name: "Running Sneakers",
        description: "Lightweight mesh design, perfect for marathon training.",
        price: 120.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhu40VBAdDWoYbTTu5J0jPuTxpgXlOYLo7Bqb0byVhTTkWhYJIXh5ngv-IDzrEKP-Bb6vD8s58_UX1QKAY5iQhdCAMScq6qs6iuK3VVYeD-17FcDsycS5ZRiBOg2jAsgUIBlnNHkFfjk5_NdnWPG1IpNDx7jhYwu6qyNGCb3qhX4XoAEzyP7rbbX4bu0JuaV-omRIA4iMQ-tzzDEr7uHfTv01RY1P6tTngd042Hb6dvxajxnL-XITpcr_b67jdOx94bnTSwWFqzQd"
    },
    {
        id: 7,
        name: "Urban Backpack",
        description: "Water-resistant canvas, fits 15\" laptops comfortably.",
        price: 75.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWAIZwKDMZQ4KuFmIIADR8Bszdb1UWHZDkN8_vbz2h4Tqy4_PydbXcZ5wHR8ZO6A35Tz9qwqnwaSieqGUprehlZV5CJW3AbrElKAPD4_0rN4evIysaj8AYmPKFIVLTkqKuromwoL6JXq0uJwKqepg85yEyD2UEp9LYn5Mauev8P1n9--Y_MUDt8pPIFebg6Ci6ZU2HIOiQ7yQiuXylt_daaHbqN-SPGcHGnkq9PSoYYOmaWQTXGCphRoFOY0NyjTOrX5rLYhS3coA4"
    },
    {
        id: 8,
        name: "Ceramic Mug Set",
        description: "Set of 4 handcrafted mugs, dishwasher and microwave safe.",
        price: 40.00,
        originalPrice: 55.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjK5T0KzTcQIpBoiA2IZHTKtSNek1I8fYDW2RBMRhCQSYVzBEE1PZ_aOwYLkWlbBxoWowebmmmQKio_t_zVhS26uhMaoViciLEw9Hkb9G_2knwCT40KLLfv6mUoG1oXimjig8rFYMLQBgP91XOmMC2PuCuy87sZZZMlYdwVvyqGiQGeql1C34tieuNBYFrP6MZGEjKjpobYZLX3PQ7dSdtdyVnHDm4MJJJ6gqsx4OvrYUy24aL3F0RLG4RLH1sMvMWsK_rVcsDxiPY",
        badge: "Sale"
    }
];
