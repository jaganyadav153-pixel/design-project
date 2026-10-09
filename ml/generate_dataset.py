"""
Student Guidance & Domain Recommender - Synthetic Dataset Generator
Generates 500 realistic student records with quiz, marks, interests
Used for training Decision Tree, Random Forest, KNN, PCA models
Run: python generate_dataset.py
Output: dataset.csv + dataset_stats.txt
"""
import csv
import random
import json
from pathlib import Path

random.seed(42)

DOMAINS = ["AI", "ML", "Data Science", "Big Data", "Computer Vision", "NLP", "Web Development", "Mobile App Development", "Software Engineering", "Game Development", "HCI", "Cybersecurity", "Cloud Computing", "Computer Networks", "DBMS", "Operating Systems", "Computer Architecture", "DevOps", "Distributed Systems", "IoT", "Blockchain", "Robotics", "AR/VR", "Embedded Systems", "Quantum Computing"]

# Quiz dimensions: logic, math, creativity, security_interest, cloud_interest, data_interest, os_interest, coding
# Marks: math_marks, physics_marks, programming_marks, english_marks (0-100)

def generate_student(i):
    # Legacy dataset is 6-domain (500 rows) — Atlas UI is 25-way via rules/weights.
    # Do NOT expand to 25 here without retraining (keeps existing dataset.csv/model.pkl stable).
    LEGACY_DOMAINS = ["AI", "ML", "DBMS", "Operating Systems", "Cloud Computing", "Cybersecurity"]
    LEGACY_WEIGHTS = [18, 17, 16, 16, 17, 16]
    assert len(LEGACY_DOMAINS) == len(LEGACY_WEIGHTS), "weights must match domains"
    domain = random.choices(LEGACY_DOMAINS, weights=LEGACY_WEIGHTS)[0]

    # Generate quiz scores (1-5)
    base = {d: random.randint(1,3) for d in DOMAINS}
    # boost intended domain
    if domain == "AI":
        base["AI"] = random.randint(4,5)
        base["ML"] = random.randint(3,5)
        logic = random.randint(4,5)
        math = random.randint(4,5)
        creativity = random.randint(3,5)
        security = random.randint(1,3)
        cloud = random.randint(1,3)
        data = random.randint(3,5)
        os_score = random.randint(1,3)
    elif domain == "ML":
        base["ML"] = random.randint(4,5)
        logic = random.randint(4,5)
        math = random.randint(4,5)
        creativity = random.randint(3,4)
        security = random.randint(1,3)
        cloud = random.randint(2,3)
        data = random.randint(4,5)
        os_score = random.randint(2,3)
    elif domain == "Cybersecurity":
        security = random.randint(4,5)
        logic = random.randint(3,5)
        math = random.randint(3,4)
        creativity = random.randint(2,3)
        cloud = random.randint(3,4)
        data = random.randint(2,3)
        os_score = random.randint(4,5)
    elif domain == "Cloud Computing":
        cloud = random.randint(4,5)
        logic = random.randint(3,4)
        math = random.randint(3,4)
        creativity = random.randint(2,3)
        security = random.randint(3,4)
        data = random.randint(3,4)
        os_score = random.randint(3,4)
    elif domain == "DBMS":
        data = random.randint(4,5)
        logic = random.randint(3,5)
        math = random.randint(3,4)
        cloud = random.randint(3,4)
        security = random.randint(2,3)
        creativity = random.randint(2,3)
        os_score = random.randint(3,4)
    else: # OS
        os_score = random.randint(4,5)
        logic = random.randint(4,5)
        math = random.randint(3,4)
        security = random.randint(3,4)
        cloud = random.randint(2,3)
        data = random.randint(2,3)
        creativity = random.randint(2,3)

    # Marks correlated with domain
    if domain in ["AI", "ML"]:
        math_marks = random.randint(75, 98)
        programming_marks = random.randint(75, 95)
    elif domain == "Cybersecurity":
        math_marks = random.randint(65, 88)
        programming_marks = random.randint(70, 90)
    elif domain == "Cloud Computing":
        math_marks = random.randint(68, 90)
        programming_marks = random.randint(72, 92)
    else:
        math_marks = random.randint(60, 92)
        programming_marks = random.randint(65, 90)
    
    physics_marks = random.randint(60, 95)
    english_marks = random.randint(60, 95)
    
    # Interests text encoding
    interests = domain  # simplified

    # Learning style
    learning_style = random.choice(["Visual", "Auditory", "Kinesthetic", "Reading"])
    personality = random.choice(["Analytical", "Creative", "Practical", "Social"])

    return {
        "student_id": f"STU{i:04d}",
        "logic_score": logic,
        "math_aptitude": math,
        "creativity": creativity,
        "security_interest": security,
        "cloud_interest": cloud,
        "data_interest": data,
        "os_interest": os_score,
        "math_marks": math_marks,
        "physics_marks": physics_marks,
        "programming_marks": programming_marks,
        "english_marks": english_marks,
        "learning_style": learning_style,
        "personality": personality,
        "recommended_domain": domain
    }

def main():
    out_path = Path(__file__).parent / "dataset.csv"
    records = [generate_student(i) for i in range(1, 501)]
    
    with open(out_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=records[0].keys())
        writer.writeheader()
        writer.writerows(records)
    
    # stats
    from collections import Counter
    cnt = Counter(r["recommended_domain"] for r in records)
    stats_path = Path(__file__).parent / "dataset_stats.txt"
    with open(stats_path, "w", encoding="utf-8") as sf:
        sf.write("Student Guidance Dataset - 500 Records\n")
        sf.write("="*40 + "\n")
        for k, v in cnt.items():
            sf.write(f"{k}: {v} ({v/5:.1f}%)\n")
        avg_math = sum(r["math_marks"] for r in records)/len(records)
        sf.write(f"\nAvg Math Marks: {avg_math:.1f}\n")
        sf.write(f"Learning Styles: {Counter(r['learning_style'] for r in records)}\n")
        sf.write(f"Personalities: {Counter(r['personality'] for r in records)}\n")
    
    print(f"Generated {len(records)} records -> {out_path}")
    print(cnt)

if __name__ == "__main__":
    main()
