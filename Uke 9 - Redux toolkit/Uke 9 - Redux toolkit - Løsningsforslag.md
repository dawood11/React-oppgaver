## Uke 9 - `Redux Toolkit`: Løsning og Forklaring:

### **Løsningsforslag til Oppgave 1: Installer Redux Toolkit**

```bash
npm install @reduxjs/toolkit react-redux
```
### **Løsningsforslag til Oppgave 2: Sett opp Redux Store med `configureStore`**

```javascript
import { configureStore } from '@reduxjs/toolkit';
// Importer dine reducere her...

const store = configureStore({
  reducer: {
    // Dine reducer oppføringer her...
  }
});

export default store;
```

### **Løsningsforslag til Oppgave 3: Lag en Slice for Erfaringer**

```javascript
import { createSlice } from '@reduxjs/toolkit';

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {
    addExperience: (state, action) => {
      state.push(action.payload);
    },
    removeExperience: (state, action) => {
      return state.filter(exp => exp.id !== action.payload.id);
    }
  }
});

export const { addExperience, removeExperience } = experiencesSlice.actions;

export default experiencesSlice.reducer;
```

### **Løsningsforslag til Oppgave 4: Bruk `useDispatch` og `useSelector` fra Redux Toolkit**

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { addExperience, removeExperience } from './path-to-experiencesSlice';

const ExperienceList = () => {
  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();

  const handleAdd = (experience) => {
    dispatch(addExperience(experience));
  }

  const handleRemove = (id) => {
    dispatch(removeExperience({ id }));
  }

  // Render logikk for listen her...
}
```

### **Løsningsforslag til Oppgave 5: Implementer asynkron logikk med `createAsyncThunk`**

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async () => {
    const response = await fetch('API_URL_HERE');
    const data = await response.json();
    return data;
  }
);

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExperiences.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default experiencesSlice.reducer;
```

### **Løsningsforslag til Oppgave 6 (Valgfri): Introduksjon til `RTK Query`**

Denne oppgaven er mer av en utforskende natur. Det beste vil være å følge [offisiell dokumentasjon](https://redux-toolkit.js.org/rtk-query/overview) for å implementere RTK Query.

#### **Utforskende Eksempler med RTK Query**

#### **1. Definere en API Slice for Erfaringer:**

Med RTK Query, kan du definere en API slice ved hjelp av `createApi` som vil håndtere alle CRUD-operasjonene for dine erfaringer.

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getExperiences: builder.query({
      query: () => 'experiences'
    }),
    addExperience: builder.mutation({
      query: (newExperience) => ({
        url: 'experiences',
        method: 'POST',
        body: newExperience
      })
    })
  })
});

export const { useGetExperiencesQuery, useAddExperienceMutation } = api;
```

#### **2. Hent Erfaringer i en Komponent:**

Bruk den genererte hook `useGetExperiencesQuery` for å hente erfaringene.

```javascript
import { useGetExperiencesQuery } from './apiSlice';

const ExperienceList = () => {
  const { data: experiences, isLoading, isError } = useGetExperiencesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading experiences</div>;

  // Render logikk for listen her...
}
```

#### **3. Legg til en ny Erfaring:**

Bruk den genererte mutation hook `useAddExperienceMutation` for å legge til en ny erfaring.

```javascript
import { useAddExperienceMutation } from './apiSlice';

const AddExperienceForm = () => {
  const [addExperience] = useAddExperienceMutation();

  const handleSubmit = (newExperience) => {
    addExperience(newExperience);
  }

  // Render form logikk her...
}
```

Disse eksemplene gir en enkel introduksjon til hvordan RTK Query kan brukes i sammenheng med prosjektet ditt. For en dypere forståelse og ytterligere funksjoner (som oppdatering, sletting, caching, osv.), sjekk [offisiell RTK Query dokumentasjon](https://redux-toolkit.js.org/rtk-query/overview).

**Kilder**:
- [Redux Toolkit Official Documentation](https://redux-toolkit.js.org/)

---

