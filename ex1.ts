// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
    Book = 'book',
    DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
    type: ItemType.Book,
    title: string,
    author: string,
}

interface DVD {
    type: ItemType.DVD,
    title: string,
    duration: number,
}

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
    return items.filter(filterFn);
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<T>(items: T[]): void {
    for (const item of items) {
        for (const key in item) {
            console.log(`${key}:${item[key]}`);            
        } {
            console.log('\n');
        }
    
    }
}

// Test data
const libraryItems: (Book | DVD)[] = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

// Step 5:  הדפיסו את כל המידע הנתון
printItemsData(libraryItems)
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
filterItems(libraryItems, (item) => item.type === ItemType.DVD && item.duration > 120)
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
filterItems(libraryItems, (item) => item.type === ItemType.Book && item.author === 'Harper Lee')
