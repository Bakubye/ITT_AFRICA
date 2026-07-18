# --- SIMPLE RECEIPT CALCULATOR ---

print("=== PY-STORE SYSTEM ===")

# 1. Ask user for price and quantity
price_input = input("Enter item price ($): ")
quantity_input = input("Enter quantity: ")

# Convert text inputs into decimal numbers
price = float(price_input)
quantity = float(quantity_input)

# 2. Perform math equations
subtotal = price * quantity
tax = subtotal * 0.08
final_total = subtotal + tax

# 3. Print the custom breakdown receipts
print("------------------------")
print("Subtotal: $", subtotal)
print("Tax (8%): $", tax)
print("Total Bill: $", final_total)
print("------------------------")