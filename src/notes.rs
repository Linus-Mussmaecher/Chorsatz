/// Names of notes that can be compared to each other.
#[derive(Debug, Clone, Copy, Eq)]
#[allow(dead_code)]
pub enum NoteName {
    C,
    Cis,
    Des,
    D,
    Dis,
    Es,
    E,
    F,
    Eis,
    Fis,
    Ges,
    G,
    Gis,
    As,
    A,
    Ais,
    B,
    H,
    Ces,
}

pub type C_Major_Position = u32;

impl NoteName {
    pub fn to_c_dur_position(self) -> C_Major_Position {
        match self {
            NoteName::C => 0,
            NoteName::Cis => 1,
            NoteName::Des => 1,
            NoteName::D => 2,
            NoteName::Dis => 3,
            NoteName::Es => 3,
            NoteName::E => 4,
            NoteName::F => 5,
            NoteName::Eis => 5,
            NoteName::Fis => 6,
            NoteName::Ges => 6,
            NoteName::G => 7,
            NoteName::Gis => 8,
            NoteName::As => 8,
            NoteName::A => 9,
            NoteName::Ais => 10,
            NoteName::B => 10,
            NoteName::H => 11,
            NoteName::Ces => 11,
        }
    }
}

impl From<NoteName> for C_Major_Position {
    fn from(value: NoteName) -> Self {
        value.to_c_dur_position()
    }
}

impl PartialEq for NoteName {
    fn eq(&self, other: &Self) -> bool {
        core::mem::discriminant(self) == core::mem::discriminant(other)
            || self.to_c_dur_position() == other.to_c_dur_position()
    }
}

impl PartialOrd for NoteName {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        self.to_c_dur_position()
            .partial_cmp(&other.to_c_dur_position())
    }
}

impl Ord for NoteName {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.to_c_dur_position().cmp(&other.to_c_dur_position())
    }
}

#[test]
fn note_compare_test() {
    assert_eq!(NoteName::C, NoteName::C);
    assert_eq!(NoteName::Cis, NoteName::Cis);
    assert_eq!(NoteName::Cis, NoteName::Des);
    assert_eq!(NoteName::Des, NoteName::Cis);
    assert_eq!(NoteName::Cis, NoteName::Des);
    assert_eq!(NoteName::Des, NoteName::Cis);
    assert_eq!(NoteName::F, NoteName::Eis);
    assert_eq!(NoteName::Ais, NoteName::B);
    assert_eq!(NoteName::Ces, NoteName::H);
}
