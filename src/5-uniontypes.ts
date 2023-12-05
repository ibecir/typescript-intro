function kgToLbs(weight: number | string): number {
    // We will use technique called narrowing
    if (typeof weight === "string")
        weight = parseInt(weight)

    return weight * 2.2;
}