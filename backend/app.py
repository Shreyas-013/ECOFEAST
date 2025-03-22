# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import requests
# from datetime import datetime, timedelta

# app = Flask(__name__)
# CORS(app)

# # Sample shelf life (in days) for common items
# SHELF_LIFE = {
#     "milk": 7, "bread": 5, "eggs": 21, "cheese": 14, "chicken": 2,
#     "fish": 2, "apple": 30, "banana": 7, "rice": 180, "potato": 60
# }

# SPOONACULAR_API_KEY = "6f8aca0121274723a38ccd166addda85"  # Replace with your API key
# YOUTUBE_API_KEY = "AIzaSyBfu6xyOSB9uvWCjK_y10K83eZZjl5CDpQ"  # Replace with your YouTube API key

# def is_expired(food_item, purchase_date):
#     """Check if a food item is expired."""
#     today = datetime.today().date()
#     try:
#         purchase_date = datetime.strptime(purchase_date, "%Y-%m-%d").date()
#     except ValueError:
#         return None  # Invalid date format

#     shelf_days = SHELF_LIFE.get(food_item.lower(), 10)  # Default shelf life is 10 days
#     expiry_date = purchase_date + timedelta(days=shelf_days)

#     return "Expired" if today > expiry_date else "Not Expired"

# def fetch_recipe_steps(recipe_id):
#     """Fetch detailed recipe instructions by recipe ID."""
#     url = f"https://api.spoonacular.com/recipes/{recipe_id}/analyzedInstructions?apiKey={SPOONACULAR_API_KEY}"
#     response = requests.get(url)
#     if response.status_code == 200 and response.json():
#         steps = response.json()[0].get("steps", [])
#         return [step["step"] for step in steps] if steps else ["No steps available."]
#     return ["Recipe steps not available."]

# def fetch_youtube_video(query):
#     """Fetch the top YouTube video link for a given recipe."""
#     url = f"https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&key={YOUTUBE_API_KEY}&maxResults=1"
#     response = requests.get(url)
#     if response.status_code == 200 and response.json().get("items"):
#         video_id = response.json()["items"][0]["id"]["videoId"]
#         return f"https://www.youtube.com/embed/{video_id}"
#     return None

# def fetch_recipes(available_items):
#     """Fetch recipes based on available non-expired food items."""
#     ingredients = ",".join(available_items)
#     url = f"https://api.spoonacular.com/recipes/findByIngredients?ingredients={ingredients}&number=5&apiKey={SPOONACULAR_API_KEY}"
#     response = requests.get(url)

#     if response.status_code == 200:
#         recipes = response.json()
#         final_recipes = []
#         for recipe in recipes:
#             recipe_id = recipe["id"]
#             steps = fetch_recipe_steps(recipe_id)
#             youtube_link = fetch_youtube_video(recipe["title"])
#             final_recipes.append({
#                 "title": recipe["title"],
#                 "image": recipe["image"],
#                 "steps": steps,
#                 "youtube_link": youtube_link
#             })
#         return final_recipes
#     return []

# @app.route("/classify", methods=["POST"])
# def classify_food():
#     """API to classify food items and fetch recipes based on non-expired items."""
#     data = request.json.get("food_items", [])
#     results = []
#     non_expired_items = []

#     for item in data:
#         parts = item.rsplit(" ", 1)  # Split food name and date
#         if len(parts) != 2:
#             continue  # Skip invalid inputs

#         food_name, purchase_date = parts
#         status = is_expired(food_name, purchase_date)

#         if status == "Not Expired":
#             non_expired_items.append(food_name)

#         results.append({
#             "food": food_name,
#             "status": status
#         })

#     recipes = fetch_recipes(non_expired_items) if non_expired_items else []

#     return jsonify({"classified_items": results, "recipes": recipes})

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# Sample shelf life (in days) for common items
SHELF_LIFE = {
    "milk": 7, "bread": 5, "eggs": 21, "cheese": 14, "chicken": 2,
    "fish": 2, "apple": 30, "banana": 7, "rice": 180, "potato": 60
}

SPOONACULAR_API_KEY = "6f8aca0121274723a38ccd166addda85"  # Replace with your API key
YOUTUBE_API_KEY = "AIzaSyAp3hPbhFPEuYoTtRc-i7ZQph3y42DxCZk"  # Replace with your YouTube API key

def is_expired(food_item, purchase_date):
    """Check if a food item is expired."""
    today = datetime.today().date()
    try:
        purchase_date = datetime.strptime(purchase_date, "%Y-%m-%d").date()
    except ValueError:
        return None  # Invalid date format

    shelf_days = SHELF_LIFE.get(food_item.lower(), 10)  # Default shelf life is 10 days
    expiry_date = purchase_date + timedelta(days=shelf_days)

    return "Expired" if today > expiry_date else "Not Expired"

def fetch_recipe_steps(recipe_id):
    """Fetch detailed recipe instructions by recipe ID."""
    url = f"https://api.spoonacular.com/recipes/{recipe_id}/analyzedInstructions?apiKey={SPOONACULAR_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200 and response.json():
        steps = response.json()[0].get("steps", [])
        return [step["step"] for step in steps] if steps else ["No steps available."]
    return ["Recipe steps not available."]

def fetch_youtube_video(query):
    """Fetch the top YouTube video link for a given recipe."""
    url = f"https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&key={YOUTUBE_API_KEY}&maxResults=1"
    response = requests.get(url)
    if response.status_code == 200 and response.json().get("items"):
        video_id = response.json()["items"][0]["id"]["videoId"]
        return f"https://www.youtube.com/embed/{video_id}"
    return None

def fetch_recipes(available_items):
    """Fetch recipes based on available non-expired food items."""
    if not available_items:
        print("No available items to fetch recipes.")  # Debugging log
        return []

    ingredients = ",".join(available_items)
    url = f"https://api.spoonacular.com/recipes/findByIngredients?ingredients={ingredients}&number=5&apiKey={SPOONACULAR_API_KEY}"

    print(f"Fetching recipes from Spoonacular API: {url}")  # Log the API request URL

    response = requests.get(url)

    if response.status_code == 200:
        recipes = response.json()
        print(f"Received {len(recipes)} recipes from Spoonacular.")  # Log the number of recipes received

        final_recipes = []
        for recipe in recipes:
            recipe_id = recipe["id"]
            print(f"Fetching steps for recipe ID: {recipe_id}")  # Log each recipe ID
            steps = fetch_recipe_steps(recipe_id)
            
            print(f"Fetching YouTube video for: {recipe['title']}")  # Log YouTube fetch attempt
            youtube_link = fetch_youtube_video(recipe["title"])  

            final_recipes.append({
                "title": recipe["title"],
                "image": recipe["image"],
                "steps": steps,
                "youtube_link": youtube_link,
                "sourceUrl": f"https://spoonacular.com/recipes/{recipe['title'].replace(' ', '-').lower()}-{recipe_id}"
            })

        return final_recipes

    print(f"Failed to fetch recipes. Status Code: {response.status_code}, Response: {response.text}")  # Log errors
    return []


@app.route("/classify", methods=["POST"])
def classify_food():
    """API to classify food items and fetch recipes based on non-expired items."""
    data = request.json.get("food_items", [])
    results = []
    non_expired_items = []

    for item in data:
        parts = item.rsplit(" ", 1)  # Split food name and date
        if len(parts) != 2:
            continue  # Skip invalid inputs

        food_name, purchase_date = parts
        status = is_expired(food_name, purchase_date)

        if status == "Not Expired":
            non_expired_items.append(food_name)

        results.append({
            "food": food_name,
            "status": status
        })

    recipes = fetch_recipes(non_expired_items) if non_expired_items else []

    return jsonify({"classified_items": results, "recipes": recipes})

if __name__ == "__main__":
    app.run(debug=True)